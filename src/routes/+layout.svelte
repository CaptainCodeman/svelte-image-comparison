<script lang="ts">
	import { base } from '$app/paths'
	import '../app.postcss'
</script>

<main class="p-4 h-full max-w-4xl mx-auto">
	<nav class="mb-4">
		<a class="text-blue-700 underline" href="{base}/">Basic</a> |
		<a class="text-blue-700 underline" href="{base}/panzoom">With Pan &amp; Zoom</a>
	</nav>
	<h1 class="font-bold tracking-tighter text-gray-700 text-3xl">svelte-image-comparison</h1>

	<slot />
</main>
