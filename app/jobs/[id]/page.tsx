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
      <Link 
        href="/" 
        className="inline-flex items-center text-slate-600 hover:text-emerald-600 text-sm font-medium transition-colors group"
      >
        <svg className="w-4 h-4 mr-1 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to jobs
      </Link>
      
      <div className="card-subtle p-8 space-y-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-light text-slate-900 leading-tight">{job.title}</h1>
            <div className="space-y-3">
              <p className="text-lg text-slate-700 font-medium">{job.company}</p>
              <p className="text-slate-500 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {job.location}
              </p>
            </div>
            
            <div className="flex items-center space-x-3 pt-2">
              <span className="job-type-badge">
                {job.type.replace('-', ' ')}
              </span>
              {job.salary && (
                <span className="salary-badge">
                  {job.salary}
                </span>
              )}
              <span className="text-slate-400 text-sm flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Posted {job.postedAt.toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
              <div className="w-1 h-6 bg-emerald-500 rounded-full mr-3"></div>
              Description
            </h2>
            <p className="text-slate-700 leading-relaxed">{job.description}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
              <div className="w-1 h-6 bg-emerald-500 rounded-full mr-3"></div>
              Requirements
            </h2>
            <ul className="space-y-3">
              {job.requirements.map((req, index) => (
                <li key={index} className="text-slate-700 flex items-start">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-sage-50 p-6 rounded-lg border border-emerald-100">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Ready to Apply?</h3>
          <p className="text-slate-600 text-sm mb-4">
            Send your resume and cover letter to get started:
          </p>
          <a 
            href={`mailto:${job.email}`}
            className="btn-accent"
          >
            Apply Now - {job.email}
          </a>
        </div>
      </div>
    </div>
  )
}