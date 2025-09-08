'use client'

import { Job, paginateJobs } from '@/lib/jobs'
import { useFilteredJobs } from '@/hooks/useFilteredJobs'
import JobFilters from '@/components/JobFilters'
import JobCard from '@/components/JobCard'
import Pagination from '@/components/Pagination'
import { useState } from 'react'

interface JobListProps {
  jobs: Job[]
}

export default function JobList({ jobs }: JobListProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const { filters, setFilters, filteredJobs, filterOptions } = useFilteredJobs(jobs)

  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters)
    setCurrentPage(1)
  }

  const paginatedData = paginateJobs(filteredJobs, currentPage)
  
  if (jobs.length === 0) {
    return (
      <div className="text-center py-12 text-slate-500">
        <p>No jobs available at the moment. Check back soon!</p>
      </div>
    )
  }
  
  return (
    <div className="space-y-8">
      <JobFilters
        filters={filters}
        onFiltersChange={handleFiltersChange}
        jobTypes={filterOptions.types}
        locations={filterOptions.locations}
      />

      {filteredJobs.length === 0 ? (
        <div className="text-center py-12 text-slate-500">
          <p>No jobs match your current filters.</p>
          <button
            onClick={() => handleFiltersChange({ search: '', type: [], location: [] })}
            className="text-emerald-600 hover:text-emerald-700 font-medium mt-2"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="text-sm text-slate-500">
            {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
          </div>

          <div className="grid gap-6">
            {paginatedData.jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {paginatedData.totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={paginatedData.totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      )}
    </div>
  )
}