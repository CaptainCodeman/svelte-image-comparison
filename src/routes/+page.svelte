<script lang="ts">
	import ImageComparison from '$lib'
	import { base } from '$app/paths'
</script>

<svelte:head>
	<title>svelte-image-comparison</title>
</svelte:head>

<h1>svelte-image-comparison</h1>
<p>Svelte component to compare two image or canvas elements</p>

<pre>
&lt;ImageComparison>
  &lt;img src="/animal-ga395c165e_1920a.webp" alt="Before" slot="left" />
  &lt;img src="/animal-ga395c165e_1920b.webp" alt="After" slot="right" />
&lt;/ImageComparison>
</pre>

<ImageComparison>
	<img src="{base}/animal-ga395c165e_1920a.webp" alt="Before" slot="left" />
	<img src="{base}/animal-ga395c165e_1920b.webp" alt="After" slot="right" />
</ImageComparison>

<style>
	h1,
	p {
		font-family: Arial, Helvetica, sans-serif;
	}
	img {
		max-width: 100%;
		height: auto;
		user-select: none;
		pointer-events: none;
	}
</style>
