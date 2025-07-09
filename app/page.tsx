import Link from 'next/link'
import { getJobs } from '@/lib/jobs'

export default function Home() {
  const jobs = getJobs();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-light text-gray-900 tracking-tight">
          Find Your Next Opportunity
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Connecting talent with opportunity across Africa
        </p>
        <div className="flex justify-center space-x-4 pt-4">
          <Link 
            href="/post-job"
            className="bg-gray-900 text-white px-6 py-2 text-sm hover:bg-gray-800 transition-colors"
          >
            Post a Job
          </Link>
          <Link 
            href="/services"
            className="border border-gray-300 text-gray-700 px-6 py-2 text-sm hover:border-gray-400 transition-colors"
          >
            HR Services
          </Link>
        </div>
      </div>

      {/* Jobs Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-light text-gray-900">Latest Jobs</h2>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white border border-gray-200 p-6 hover:border-gray-300 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">{job.title}</h3>
                  <p className="text-gray-600 text-sm">{job.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm">{job.location}</p>
                  <p className="text-gray-400 text-xs mt-1">
                    {job.postedAt.toLocaleDateString()}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  {job.type.replace('-', ' ')}
                </span>
                {job.salary && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-700">{job.salary}</span>
                  </>
                )}
              </div>
              
              <p className="text-gray-700 text-sm mb-4 line-clamp-2 leading-relaxed">
                {job.description}
              </p>
              
              <Link 
                href={`/jobs/${job.id}`}
                className="text-gray-900 text-sm hover:text-gray-600 transition-colors"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
