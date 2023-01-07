<script lang="ts">
	import ImageComparison from '$lib'
	import { base } from '$app/paths'
</script>

<svelte:head>
	<title>svelte-image-comparison</title>
</svelte:head>

<p class="mt-2 text-gray-600">Svelte component to compare two image or canvas elements</p>

<pre class="text-xs mt-4">
&lt;ImageComparison>
  &lt;img src="/animal-ga395c165e_1920a.webp" alt="Before" slot="left" />
  &lt;img src="/animal-ga395c165e_1920b.webp" alt="After" slot="right" />
&lt;/ImageComparison>
</pre>

<ImageComparison class="max-w-full mt-4">
	<img class="select-none pointer-events-none" src="{base}/animal-ga395c165e_1920a.webp" alt="Before" slot="left" />
	<img class="select-none pointer-events-none" src="{base}/animal-ga395c165e_1920b.webp" alt="After" slot="right" />
</ImageComparison>
