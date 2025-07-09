import { getJobById } from '@/lib/jobs'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function JobDetail({ params }: { params: { id: string } }) {
  const job = getJobById(params.id);
  
  if (!job) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
        ← Back to jobs
      </Link>
      
      <div className="bg-white border border-gray-200 p-8 space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-light text-gray-900">{job.title}</h1>
          <div className="space-y-2">
            <p className="text-lg text-gray-700">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
          </div>
          
          <div className="flex items-center space-x-4 pt-2">
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              {job.type.replace('-', ' ')}
            </span>
            {job.salary && (
              <>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-700">{job.salary}</span>
              </>
            )}
            <span className="text-gray-300">•</span>
            <span className="text-gray-500 text-sm">
              Posted {job.postedAt.toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Requirements</h2>
            <ul className="space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-6 space-y-3">
          <h3 className="text-lg font-medium text-gray-900">Apply</h3>
          <p className="text-gray-600 text-sm">
            Send your resume and cover letter to:
          </p>
          <a 
            href={`mailto:${job.email}`}
            className="inline-block bg-gray-900 text-white px-6 py-2 text-sm hover:bg-gray-800 transition-colors"
          >
            {job.email}
          </a>
        </div>
      </div>
    </div>
  )
}