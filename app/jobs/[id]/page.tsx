import { getJobById } from '@/lib/jobs'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function JobDetail({ params }: { params: { id: string } }) {
  const job = getJobById(params.id);

  if (!job) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link href="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
        ← Back to jobs
      </Link>
      
      <div className="bg-white p-8 rounded-lg border border-gray-200">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{job.title}</h1>
          <p className="text-xl text-gray-600 mb-2">{job.company}</p>
          <p className="text-gray-500 mb-4">{job.location}</p>
          
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
              {job.type}
            </span>
            {job.salary && (
              <span className="text-green-600 font-medium">{job.salary}</span>
            )}
            <span className="text-gray-400 text-sm">
              Posted {job.postedAt.toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Job Description</h2>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Requirements</h2>
          <ul className="list-disc list-inside space-y-2">
            {job.requirements.map((req, index) => (
              <li key={index} className="text-gray-700">{req}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Apply Now</h3>
          <p className="text-gray-600 mb-4">
            To apply for this position, please send your resume and cover letter to:
          </p>
          <a 
            href={`mailto:${job.email}`}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            {job.email}
          </a>
        </div>
      </div>
    </div>
  )
}