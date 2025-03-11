<script lang="ts">
	import "../app.css";
  </script>
  
  <div class="min-h-screen flex flex-col">
	<header class="py-4 border-b border-gray-200" style="color: #004953">
	  <div class="container mx-auto px-4">
		<nav class="flex justify-between items-center">
		  <a href="/" class="font-bold text-xl">jobboard</a>
		  <div class="flex gap-6">
			<a href="/jobs" class="text-gray-600 hover:text-blue-600">Browse Jobs</a>
			<a href="/post" class="text-gray-600 hover:text-blue-600">Post a Job</a>
			<a href="/login" class="font-bold text-gray-600 hover:text-blue-600" style="color: #004953">Login</a>
		  </div>
		</nav>
	  </div>
	</header>
  
	<main class="flex-grow">
	  <slot />
	</main>
  
	<footer class="py-6 bg-gray-50 border-t border-gray-200">
	  <div class="container mx-auto px-4">
		<div class="flex justify-between items-center">
		  <div>
			<p class="text-sm text-gray-500">© 2025 jobboard. All rights reserved.</p>
		  </div>
		  <div class="flex gap-4">
			<a href="/about" class="text-sm text-gray-500 hover:text-blue-600">About</a>
			<a href="/terms" class="text-sm text-gray-500 hover:text-blue-600">Terms</a>
			<a href="/privacy" class="text-sm text-gray-500 hover:text-blue-600">Privacy</a>
		  </div>
		</div>
	  </div>
	</footer>
  </div>