<script lang="ts">
    // More comprehensive mock data would go here
    const jobs = [
      {
        id: 1,
        title: "Frontend Developer",
        company: "TechCorp",
        location: "Remote",
        type: "Full-time",
        salary: "$90,000 - $120,000",
        posted: "2 days ago",
        description: "We're looking for a skilled frontend developer with experience in modern JavaScript frameworks..."
      },
    ];
  </script>
  
  <svelte:head>
    <title>Browse Jobs | jobboard</title>
  </svelte:head>
  
  <section class="py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold mb-8">Browse Jobs</h1>
      
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Filters sidebar -->
        <div class="lg:w-1/4">
          <div class="border border-gray-200 rounded-lg p-4">
            <h2 class="font-bold mb-4">Filters</h2>
            
            <div class="mb-4">
              <h3 class="font-medium mb-2">Job Type</h3>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input type="checkbox" class="mr-2" />
                  <span>Full-time</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="mr-2" />
                  <span>Part-time</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="mr-2" />
                  <span>Contract</span>
                </label>
              </div>
            </div>
            
            <div class="mb-4">
              <h3 class="font-medium mb-2">Location</h3>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input type="checkbox" class="mr-2" />
                  <span>Remote</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="mr-2" />
                  <span>On-site</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="mr-2" />
                  <span>Hybrid</span>
                </label>
              </div>
            </div>
            
            <button class="w-full border border-gray-300 rounded py-2 text-sm hover:bg-gray-50">
              Clear Filters
            </button>
          </div>
        </div>
        
        <!-- Job listings -->
        <div class="lg:w-3/4">
          <div class="space-y-4">
            {#each jobs as job}
              <div class="border border-gray-200 rounded-lg p-6 hover:shadow-sm">
                <div class="flex justify-between">
                  <div>
                    <h2 class="font-bold text-xl mb-1">
                      <a href={`/jobs/${job.id}`} class="text-blue-600 hover:underline">{job.title}</a>
                    </h2>
                    <p class="text-gray-600">{job.company} • {job.location}</p>
                  </div>
                  <div class="text-right">
                    <span class="text-gray-500 text-sm">{job.posted}</span>
                  </div>
                </div>
                
                <div class="mt-4">
                  <p class="text-gray-700 line-clamp-2">{job.description}</p>
                </div>
                
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">{job.type}</span>
                  <span class="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">{job.salary}</span>
                </div>
              </div>
            {/each}
          </div>
          
          <!-- Pagination -->
          <div class="mt-8 flex justify-center">
            <div class="flex">
              <a href="#" class="px-4 py-2 border border-gray-300 text-gray-500 rounded-l hover:bg-gray-50">Previous</a>
              <a href="#" class="px-4 py-2 border-t border-b border-gray-300 text-blue-600 bg-blue-50">1</a>
              <a href="#" class="px-4 py-2 border-t border-b border-gray-300 text-gray-700 hover:bg-gray-50">2</a>
              <a href="#" class="px-4 py-2 border border-gray-300 text-gray-500 rounded-r hover:bg-gray-50">Next</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  