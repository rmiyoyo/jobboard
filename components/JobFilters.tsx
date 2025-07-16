'use client'

import { useState } from 'react'
import { ChevronDown, X, Search } from 'lucide-react'

export type JobFilters = {
  search: string
  type: string[]
  location: string[]
}

interface JobFiltersProps {
  filters: JobFilters
  onFiltersChange: (filters: JobFilters) => void
  jobTypes: string[]
  locations: string[]
}

export default function JobFilters({ 
  filters, 
  onFiltersChange, 
  jobTypes, 
  locations 
}: JobFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const hasActiveFilters = filters.search || filters.type.length > 0 || filters.location.length > 0
  
  const updateFilters = (key: keyof JobFilters, value: any) => {
    onFiltersChange({ ...filters, [key]: value })
  }
  
  const toggleFilter = (category: 'type' | 'location', value: string) => {
    const current = filters[category]
    const updated = current.includes(value)
      ? current.filter(item => item !== value)
      : [...current, value]
    updateFilters(category, updated)
  }
  
  const clearFilters = () => {
    onFiltersChange({ search: '', type: [], location: [] })
  }
  
  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search jobs, companies, or keywords..."
          value={filters.search}
          onChange={(e) => updateFilters('search', e.target.value)}
          className="input-field pl-10"
        />
      </div>
      
      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
        >
          <span className="text-sm font-medium">Filters</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
        
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            Clear all
          </button>
        )}
      </div>
      
      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {filters.type.map(type => (
            <span key={type} className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full text-xs">
              {type}
              <button onClick={() => toggleFilter('type', type)}>
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
          {filters.location.map(location => (
            <span key={location} className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full text-xs">
              {location}
              <button onClick={() => toggleFilter('location', location)}>
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}
      
      {/* Collapsible Filter Options */}
      {isExpanded && (
        <div className="grid md:grid-cols-2 gap-6 p-4 bg-slate-50 rounded-lg">
          {/* Job Types */}
          <div>
            <h3 className="font-medium text-slate-900 mb-3">Job Type</h3>
            <div className="space-y-2">
              {jobTypes.map(type => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.type.includes(type)}
                    onChange={() => toggleFilter('type', type)}
                    className="w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500"
                  />
                  <span className="text-sm text-slate-700">{type}</span>
                </label>
              ))}
            </div>
          </div>
          
          {/* Locations */}
          <div>
            <h3 className="font-medium text-slate-900 mb-3">Location</h3>
            <div className="space-y-2">
              {locations.map(location => (
                <label key={location} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.location.includes(location)}
                    onChange={() => toggleFilter('location', location)}
                    className="w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500"
                  />
                  <span className="text-sm text-slate-700">{location}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}