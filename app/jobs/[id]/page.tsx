import { getJobById } from '@/lib/jobs'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function JobDetail({ params }: { params: { id: string } }) {
  const job = await getJobById(params.id);
  
  if (!job) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Link 
        href="/" 
        className="inline-flex items-center text-slate-600 text-sm font-medium"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to jobs
      </Link>
      
      <div className="card-subtle p-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-medium text-slate-900">{job.title}</h1>
            <p className="text-lg text-emerald-600 font-medium">{job.company}</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="job-type-badge">
              {job.type.replace('-', ' ')}
            </span>
            {job.salary && (
              <span className="salary-badge">
                {job.salary}
              </span>
            )}
            <span className="text-slate-500 text-sm">
              {job.location}
            </span>
            <span className="text-slate-400 text-sm">
              Posted {job.postedAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-lg font-medium text-slate-900">Description</h2>
            <p className="text-slate-700 leading-relaxed">{job.description}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-medium text-slate-900">Requirements</h2>
            <ul className="space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="text-slate-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
          <h3 className="font-medium text-slate-900 mb-2">How to Apply</h3>
          <p className="text-slate-600 text-sm mb-3">
            Send your application to: {job.email}
          </p>
          <a 
            href={`mailto:${job.email}`}
            className="btn-accent text-sm"
          >
            Apply via Email
          </a>
        </div>
      </div>
    </div>
  )
}