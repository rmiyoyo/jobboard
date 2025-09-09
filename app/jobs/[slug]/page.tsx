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
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Get Job Updates</h3>
                <p className="text-xs text-slate-600">Join our Telegram channel for instant job alerts</p>
              </div>
            </div>
            <Link
              href="https://t.me/MonicaJobs"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors flex-shrink-0"
              aria-label="Join our Telegram channel for job updates"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <span>Join Now</span>
            </Link>
          </div>
        </div>
        
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
        <div className="text-center bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-slate-900 mb-2">Don&apos;t Miss Out!</h3>
          <p className="text-slate-600 text-sm mb-4">
            Join thousands of job seekers getting instant notifications about new opportunities
          </p>
          <Link
            href="https://t.me/MonicaJobs"
            className="social-link justify-center"
            aria-label="Join our Telegram channel for job updates"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span>Follow on Telegram</span>
          </Link>
        </div>
      </div>
    </>
  )
}