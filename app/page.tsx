import Link from 'next/link'
import { getJobs } from '@/lib/jobs'

export default async function Home() {
  const jobs = await getJobs();
  
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
            <Link 
              key={job.id} 
              href={`/jobs/${job.id}`}
              className="card-subtle p-6 block"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                {/* Left side - Job details */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-md bg-slate-100 flex items-center justify-center text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-900">
                        {job.title}
                      </h3>
                      <p className="text-emerald-600 font-medium">{job.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 text-sm line-clamp-2 leading-relaxed">
                    {job.description}
                  </p>
                </div>
                
                {/* Right side - Meta info */}
                <div className="space-y-3 sm:text-right">
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    <span className="job-type-badge">
                      {job.type.replace('-', ' ')}
                    </span>
                    {job.salary && (
                      <span className="salary-badge">
                        {job.salary}
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-slate-600 text-sm">{job.location}</p>
                    <p className="text-slate-400 text-xs">
                      Posted {job.postedAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}