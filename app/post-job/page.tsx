'use client'
import { useState } from 'react'
import { addJob } from '@/lib/jobs'
import { useRouter } from 'next/navigation'

export default function PostJob() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'full-time' as const,
    salary: '',
    description: '',
    requirements: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const job = addJob({
      ...formData,
      requirements: formData.requirements.split('\n').filter(req => req.trim())
    });
    
    router.push(`/jobs/${job.id}`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-light text-gray-900 mb-8">Post a Job</h1>
      
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Title
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="w-full p-3 border border-gray-300 text-sm focus:outline-none focus:border-gray-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company
          </label>
          <input
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            className="w-full p-3 border border-gray-300 text-sm focus:outline-none focus:border-gray-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            required
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            className="w-full p-3 border border-gray-300 text-sm focus:outline-none focus:border-gray-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Type
          </label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({...formData, type: e.target.value as any})}
            className="w-full p-3 border border-gray-300 text-sm focus:outline-none focus:border-gray-500 transition-colors"
          >
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
            <option value="remote">Remote</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Salary (Optional)
          </label>
          <input
            type="text"
            value={formData.salary}
            onChange={(e) => setFormData({...formData, salary: e.target.value})}
            placeholder="e.g., KES 100,000 - 150,000"
            className="w-full p-3 border border-gray-300 text-sm focus:outline-none focus:border-gray-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Description
          </label>
          <textarea
            required
            rows={5}
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full p-3 border border-gray-300 text-sm focus:outline-none focus:border-gray-500 transition-colors resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Requirements (one per line)
          </label>
          <textarea
            required
            rows={4}
            value={formData.requirements}
            onChange={(e) => setFormData({...formData, requirements: e.target.value})}
            placeholder="3+ years experience&#10;React/Next.js&#10;TypeScript"
            className="w-full p-3 border border-gray-300 text-sm focus:outline-none focus:border-gray-500 transition-colors resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contact Email
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-3 border border-gray-300 text-sm focus:outline-none focus:border-gray-500 transition-colors"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-3 px-6 text-sm hover:bg-gray-800 transition-colors"
        >
          Post Job
        </button>
      </form>
    </div>
  )
}
