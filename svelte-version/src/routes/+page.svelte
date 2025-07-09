<script lang="ts">
    // Mock data for featured jobs
    const featuredJobs = [
      {
        id: 1,
        title: "Frontend Developer",
        company: "TechCorp",
        location: "Remote",
        type: "Full-time",
        salary: "$90,000 - $120,000",
        posted: "2 days ago"
      },
      {
        id: 2,
        title: "Golang Backend Engineer",
        company: "CloudSystems",
        location: "New York, NY",
        type: "Full-time",
        salary: "$110,000 - $140,000",
        posted: "1 week ago"
      },
      {
        id: 3,
        title: "DevOps Specialist",
        company: "InfraTeam",
        location: "Remote",
        type: "Contract",
        salary: "$80 - $100/hour",
        posted: "3 days ago"
      }
    ];
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
    <title>jobboard | Find Your Next Tech Job</title>
</svelte:head>

<section class="py-16 bg-gray-50">
<div class="container mx-auto px-4 text-center">
    <h1 class="text-4xl font-bold mb-4">Find Your Next Tech Job</h1>
    <p class="text-xl text-gray-600 mb-8">Connecting talented developers with great companies</p>
    
    <div class="max-w-2xl mx-auto">
    <div class="bg-white p-4 rounded-lg shadow-sm flex">
        <input 
        type="text" 
        placeholder="Search for jobs (e.g. 'Svelte', 'Golang')"
        class="flex-grow p-2 focus:outline-none"
        />
        <button class="bg-blue-600 text-white px-6 py-2 rounded ml-2 hover:bg-blue-700">
        Search
        </button>
    </div>
    </div>
</div>
</section>

<section class="py-12">
<div class="container mx-auto px-4">
    <h2 class="text-2xl font-bold mb-6">Featured Jobs</h2>
    
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {#each featuredJobs as job}
        <a href={`/jobs/${job.id}`} class="block">
        <div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 class="font-bold text-lg mb-2">{job.title}</h3>
            <p class="text-gray-600 mb-4">{job.company} • {job.location}</p>
            <div class="flex justify-between text-sm">
            <span class="text-gray-500">{job.type}</span>
            <span class="text-gray-500">{job.posted}</span>
            </div>
            <div class="mt-4 text-blue-600 font-medium">{job.salary}</div>
        </div>
        </a>
    {/each}
    </div>
    
    <div class="mt-8 text-center">
    <a href="/jobs" class="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50">
        View All Jobs
    </a>
    </div>
</div>
</section>

<section class="py-12 bg-gray-50">
<div class="container mx-auto px-4 text-center">
    <h2 class="text-2xl font-bold mb-4">For Employers</h2>
    <p class="text-lg text-gray-600 mb-6">Reach thousands of qualified tech candidates</p>
    <a href="/post" class="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
    Post a Job
    </a>
</div>
</section>