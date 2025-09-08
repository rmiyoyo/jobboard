import { getJobBySlug } from '@/lib/jobs'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import { Metadata } from 'next'
import { headers } from 'next/headers'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const job = await getJobBySlug(slug)
  
  if (!job) {
    return {
      title: 'Job Not Found',
    }
  }

  return {
    title: `${job.title} at ${job.company}`,
    description: job.description.substring(0, 155) + '...',
    openGraph: {
      title: `${job.title} at ${job.company}`,
      description: job.description.substring(0, 155) + '...',
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: `${job.title} at ${job.company}`,
      description: job.description.substring(0, 155) + '...',
    },
  }
}

export default async function JobDetail({ params }: Props) {
  const headersList = await headers()
  const { slug } = await params
  const referer = headersList.get('referer')
  const job = await getJobBySlug(slug)

  if (!job) {
    notFound()
  }

  const isFromJobsList = referer?.includes('/jobs') || 
                        referer?.includes('/?page=') || 
                        referer?.includes('page=') || 
                        referer?.endsWith('/')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    hiringOrganization: {
      '@type': 'Organization',
      name: job.company,
    },
    jobLocation: {
      '@type': 'Place',
      address: job.location,
    },
    employmentType: job.type.toUpperCase().replace('-', '_'),
    datePosted: job.postedAt.toISOString(),
    ...(job.salary && {
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: 'KES',
        value: {
          '@type': 'QuantitativeValue',
          value: job.salary,
        },
      },
    }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-3xl mx-auto space-y-6">
        <nav aria-label="Breadcrumb">
          <Link
            href={isFromJobsList ? (referer || '/') : '/'}
            className="inline-flex items-center text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {isFromJobsList ? 'Back to jobs' : 'Back to home'}
          </Link>
        </nav>

        <article className="card-subtle p-6 space-y-6">
          <header className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2 flex-1">
                <h1 className="text-2xl font-medium text-slate-900">{job.title}</h1>
                <p className="text-lg text-emerald-600 font-medium">{job.company}</p>
              </div>
              <ShareButton job={job} />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="job-type-badge">{job.type.replace('-', ' ')}</span>
              {job.salary && <span className="salary-badge">{job.salary}</span>}
              <span className="text-slate-500 text-sm">{job.location}</span>
              <time 
                className="text-slate-400 text-sm"
                dateTime={job.postedAt.toISOString()}
              >
                Posted {job.postedAt.toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </time>
            </div>
          </header>

          <div className="space-y-6">
            <section>
              <h2 className="text-lg font-medium text-slate-900 mb-3">Description</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed">{job.description}</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-medium text-slate-900 mb-3">Requirements</h2>
              <ul className="space-y-2" role="list">
                {job.requirements.map((req, index) => (
                  <li key={index} className="text-slate-700 flex items-start">
                    <span className="mr-2 text-emerald-500" aria-hidden="true">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
            <h3 className="font-medium text-slate-900 mb-2">How to Apply</h3>
            <p className="text-slate-600 text-sm mb-3">
              Send your application to: <span className="font-medium">{job.email}</span>
            </p>
            <a 
              href={`mailto:${job.email}?subject=Application for ${job.title}&body=Hello,%0D%0A%0D%0AI am interested in applying for the ${job.title} position at ${job.company}.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0AThank you for your consideration.`}
              className="btn-accent text-sm"
            >
              Apply via Email
            </a>
          </div>
        </article>
      </div>
    </>
  )
}