// app/page.tsx
import Link from 'next/link'
import { getPaginatedJobs } from '@/lib/jobs'
import { Metadata } from 'next'
import { Suspense } from 'react'
import JobCardSkeleton from '@/components/JobCardSkeleton'
import JobCard from '@/components/JobCard'
import Pagination from '@/components/Pagination'

type SearchParams = {
  page?: string
}

interface PageProps {
  searchParams: Promise<SearchParams> // Update to reflect async nature
}

export const metadata: Metadata = {
  title: 'Find Your Next Opportunity',
  description: 'Browse the latest job opportunities across Africa. Find full-time, part-time, contract, and remote positions.',
  openGraph: {
    title: 'Find Your Next Opportunity | Monica HR',
    description: 'Browse the latest job opportunities across Africa',
  },
}

// Enable ISR for better performance
export const revalidate = 3600 // Revalidate every hour

async function JobList({ page }: { page: number }) {
  const { jobs, totalJobs, totalPages, currentPage, hasNextPage, hasPreviousPage } = await getPaginatedJobs(page)
  
  if (jobs.length === 0 && page === 1) {
    return (
      <div className="text-center py-12 text-slate-500">
        <p>No jobs available at the moment. Check back soon!</p>
      </div>
    )
  }

  if (jobs.length === 0 && page > 1) {
    return (
      <div className="text-center py-12 text-slate-500">
        <p>No jobs found on this page.</p>
        <Link href="/" className="text-emerald-600 hover:text-emerald-700 font-medium">
          Go to first page
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        basePath="/"
      />
    </div>
  )
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams // Await searchParams
  const page = parseInt(params.page || '1', 10)
  
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6" aria-labelledby="hero-heading">
        <div className="space-y-4">
          <h1 id="hero-heading" className="text-4xl font-light text-slate-900 tracking-tight">
            Find Your Next <span className="text-emerald-600 font-medium">Opportunity</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Connecting talent with opportunity across Africa
          </p>
        </div>
        <div className="flex justify-center space-x-4 pt-6">
          <Link href="/post-job" className="btn-primary">
            Post a Job
          </Link>
          <Link href="/services" className="btn-secondary">
            HR Services
          </Link>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="space-y-8" aria-labelledby="jobs-heading">
        <div className="flex items-center justify-between">
          <h2 id="jobs-heading" className="text-2xl font-light text-slate-900">
            {page > 1 ? `Jobs - Page ${page}` : 'Latest Jobs'}
          </h2>
          <div className="h-px bg-gradient-to-r from-emerald-200 to-transparent flex-1 ml-8" aria-hidden="true"></div>
        </div>
        
        <Suspense fallback={<JobCardSkeleton count={8} />}>
          <JobList page={page} />
        </Suspense>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-50/30 to-transparent rounded-3xl"></div>
        <div className="relative z-10 space-y-4">
          <h3 className="text-xl font-light text-slate-800">
            Ready to find your next opportunity?
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Join thousands of professionals who trust Monica HR to advance their careers
          </p>
          <div className="flex justify-center gap-2 pt-4">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full border-2 border-white"></div>
              ))}
            </div>
            <span className="text-sm text-slate-500 ml-2">2,000+ success stories</span>
          </div>
        </div>
      </section>
    </div>
  )
}