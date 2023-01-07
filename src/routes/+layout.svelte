<script lang="ts">
	import { base } from '$app/paths'
	import '../app.css'
</script>

<nav>
	<a href="{base}/">Basic</a>
	<a href="{base}/panzoom">With Pan &amp; Zoom</a>
</nav>
<main>
	<slot />
</main>
