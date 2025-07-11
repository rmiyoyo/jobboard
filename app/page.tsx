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
  searchParams: SearchParams
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

export default function Home({ searchParams }: PageProps) {
  const page = parseInt(searchParams.page || '1', 10)
  
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
    </div>
  )
}