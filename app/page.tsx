import Link from 'next/link'
import { getJobs } from '@/lib/jobs'

export default function Home() {
  const jobs = getJobs();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-light text-slate-900 tracking-tight">
            Find Your Next <span className="text-emerald-600 font-medium">Opportunity</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Connecting talent with opportunity across Africa
          </p>
        </div>
        <div className="flex justify-center space-x-4 pt-6">
          <Link 
            href="/post-job"
            className="btn-primary"
          >
            Post a Job
          </Link>
          <Link 
            href="/services"
            className="btn-secondary"
          >
            HR Services
          </Link>
        </div>
      </div>

      {/* Jobs Section */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-light text-slate-900">Latest Jobs</h2>
          <div className="h-px bg-gradient-to-r from-emerald-200 to-transparent flex-1 ml-8"></div>
        </div>
        
        <div className="grid gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="card-subtle p-6 group">
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-slate-600 font-medium">{job.company}</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-slate-500 text-sm">{job.location}</p>
                  <p className="text-slate-400 text-xs">
                    {job.postedAt.toLocaleDateString()}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 mb-4">
                <span className="job-type-badge">
                  {job.type.replace('-', ' ')}
                </span>
                {job.salary && (
                  <span className="salary-badge">
                    {job.salary}
                  </span>
                )}
              </div>
              
              <p className="text-slate-700 text-sm mb-6 line-clamp-2 leading-relaxed">
                {job.description}
              </p>
              
              <Link 
                href={`/jobs/${job.id}`}
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors group"
              >
                View Details 
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}