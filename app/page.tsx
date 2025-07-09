import Link from 'next/link'
import { getJobs } from '@/lib/jobs'

export default function Home() {
  const jobs = getJobs();

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Find Your Next Opportunity
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connecting talent with opportunity across Africa
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            href="/post-job"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Post a Job
          </Link>
          <Link 
            href="/services"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            HR Services
          </Link>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Jobs</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-2">{job.company}</p>
              <p className="text-gray-500 text-sm mb-2">{job.location}</p>
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                  {job.type}
                </span>
                {job.salary && (
                  <span className="text-green-600 text-sm font-medium">{job.salary}</span>
                )}
              </div>
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">{job.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-xs">
                  {job.postedAt.toLocaleDateString()}
                </span>
                <Link 
                  href={`/jobs/${job.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}