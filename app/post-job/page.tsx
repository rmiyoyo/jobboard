'use client'
import { useState } from 'react'
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        requirements: formData.requirements.split('\n').filter(req => req.trim())
      }),
    });

    if (response.ok) {
      const job = await response.json();
      router.push(`/jobs/${job.id}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-light text-stone-900 mb-2">Post a Job</h1>
        <p className="text-stone-600">Find the perfect candidate for your team</p>
      </div>
      
      <form onSubmit={handleSubmit} className="card-subtle p-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Job Title
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="input-field"
            placeholder="e.g., Senior Frontend Developer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Company
          </label>
          <input
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            className="input-field"
            placeholder="e.g., Tech Solutions Ltd"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Location
          </label>
          <input
            type="text"
            required
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            className="input-field"
            placeholder="e.g., Nairobi, Kenya"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Job Type
          </label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({...formData, type: e.target.value as any})}
            className="input-field"
          >
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
            <option value="remote">Remote</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Salary <span className="text-stone-500 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            value={formData.salary}
            onChange={(e) => setFormData({...formData, salary: e.target.value})}
            placeholder="e.g., KES 100,000 - 150,000"
            className="input-field"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Job Description
          </label>
          <textarea
            required
            rows={5}
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="input-field resize-none"
            placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Requirements <span className="text-stone-500 font-normal">(one per line)</span>
          </label>
          <textarea
            required
            rows={4}
            value={formData.requirements}
            onChange={(e) => setFormData({...formData, requirements: e.target.value})}
            placeholder="3+ years experience&#10;React/Next.js&#10;TypeScript&#10;Strong communication skills"
            className="input-field resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Contact Email
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="input-field"
            placeholder="hr@company.com"
          />
        </div>

        <button
          type="submit"
          className="w-full btn-accent py-3 font-medium"
        >
          Post Job
        </button>
      </form>
    </div>
  )
}