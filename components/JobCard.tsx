import Link from 'next/link'
import { Job } from '@/lib/jobs'
import { memo } from 'react'

interface JobCardProps {
  job: Job
  index?: number
}

const JobCard = memo(function JobCard({ job, index = 0 }: JobCardProps) {
  return (
    <article 
      className="fade-in"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <Link 
        href={`/jobs/${job.slug}`} 
        className="card-subtle p-6 block group"
        aria-label={`View details for ${job.title} at ${job.company}`}
        prefetch={false}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div className="space-y-3 flex-1">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-md bg-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 group-hover:text-emerald-600 transition-colors duration-200">
                  {job.title}
                </h3>
                <p className="text-emerald-600 font-medium">{job.company}</p>
              </div>
            </div>
            <p className="text-slate-700 text-sm line-clamp-2 leading-relaxed">
              {job.description}
            </p>
          </div>
          <div className="space-y-3 sm:text-right flex-shrink-0">
            <div className="flex flex-wrap gap-2 sm:justify-end">
              <span className="job-type-badge">
                {job.type.replace('-', ' ')}
              </span>
              {job.salary && (
                <span className="salary-badge">{job.salary}</span>
              )}
            </div>
            <div className="space-y-1">
              <p className="text-slate-600 text-sm">{job.location}</p>
              <time 
                className="text-slate-400 text-xs"
                dateTime={job.postedAt.toISOString()}
              >
                Posted {job.postedAt.toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </time>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
})

export default JobCard