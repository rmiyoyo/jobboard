import Link from 'next/link'
import { getJobs } from '@/lib/jobs'
import { Metadata } from 'next'
import { Suspense } from 'react'
import JobCardSkeleton from '@/components/JobCardSkeleton'
import JobList from '@/components/JobList'

export const metadata: Metadata = {
  title: 'Find Your Next Opportunity',
  description: 'Browse the latest job opportunities across Africa. Find full-time, part-time, contract, and remote positions.',
  openGraph: {
    title: 'Find Your Next Opportunity | Monica HR',
    description: 'Browse the latest job opportunities across Africa',
  },
}

export const revalidate = 3600

async function JobsData() {
  const jobs = await getJobs()
  return <JobList jobs={jobs} />
}

export default function Home() {
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
      </section>

      {/* Jobs Section */}
      <section className="space-y-8" aria-labelledby="jobs-heading">
        <div className="flex items-center justify-between">
          <h2 id="jobs-heading" className="text-2xl font-light text-slate-900">
            Latest Jobs
          </h2>
          <div className="h-px bg-gradient-to-r from-emerald-200 to-transparent flex-1 ml-8" aria-hidden="true"></div>
        </div>
        
        <Suspense fallback={<JobCardSkeleton count={8} />}>
          <JobsData />
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