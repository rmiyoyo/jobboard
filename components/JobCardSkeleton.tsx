interface JobCardSkeletonProps {
  count?: number
}

export default function JobCardSkeleton({ count = 1 }: JobCardSkeletonProps) {
  return (
    <div className="grid gap-6" role="status" aria-label="Loading jobs">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="card-subtle p-6 animate-pulse">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <div className="space-y-3 flex-1">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-md bg-slate-200" />
                <div className="space-y-2">
                  <div className="h-5 bg-slate-200 rounded w-48" />
                  <div className="h-4 bg-slate-200 rounded w-32" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-slate-200 rounded w-full" />
                <div className="h-4 bg-slate-200 rounded w-3/4" />
              </div>
            </div>
            <div className="space-y-3 sm:text-right">
              <div className="flex gap-2 sm:justify-end">
                <div className="h-6 bg-slate-200 rounded-full w-20" />
                <div className="h-6 bg-slate-200 rounded-full w-24" />
              </div>
              <div className="space-y-1">
                <div className="h-4 bg-slate-200 rounded w-24" />
                <div className="h-3 bg-slate-200 rounded w-20" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}