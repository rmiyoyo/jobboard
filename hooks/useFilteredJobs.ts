'use client'

import { useState, useEffect, useMemo } from 'react'
import { Job } from '@/lib/jobs'
import type { JobFilters } from '@/components/JobFilters'

export function useFilteredJobs(jobs: Job[]) {
  const [filters, setFilters] = useState<JobFilters>({
    search: '',
    type: [],
    location: []
  })
  
  const [debouncedSearch, setDebouncedSearch] = useState('')
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(filters.search)
    }, 300)
    return () => clearTimeout(timer)
  }, [filters.search])
  
  const filterOptions = useMemo(() => {
    const types = Array.from(new Set(jobs.map(job => job.type))).sort()
    const locations = Array.from(new Set(jobs.map(job => job.location))).sort()
    return { types, locations }
  }, [jobs])
  
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      if (debouncedSearch) {
        const searchTerm = debouncedSearch.toLowerCase()
        const matchesSearch = 
          job.title.toLowerCase().includes(searchTerm) ||
          job.company.toLowerCase().includes(searchTerm) ||
          job.description.toLowerCase().includes(searchTerm)
        if (!matchesSearch) return false
      }
      
      if (filters.type.length > 0 && !filters.type.includes(job.type)) {
        return false
      }
      
      if (filters.location.length > 0 && !filters.location.includes(job.location)) {
        return false
      }
      
      return true
    })
  }, [jobs, debouncedSearch, filters.type, filters.location])
  
  return {
    filters,
    setFilters,
    filteredJobs,
    filterOptions
  }
}
