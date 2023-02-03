<script lang="ts">
	import ImageComparison from '$lib'
	import { panzoom, type Options } from 'svelte-pan-zoom'
	import { dropzone } from './drop-zone'

	let canvas: HTMLCanvasElement
	let cx: CanvasRenderingContext2D
	let left: HTMLImageElement
	let right: HTMLImageElement
	let options: Options = {
		width: 1920,
		height: 1080,
		render,
	}

	function render(ctx: CanvasRenderingContext2D) {
		if (!left) return
		ctx.drawImage(left, 0, 0)

		if (!right) return

		if (!cx) {
			cx = canvas.getContext('2d')!
		}

		cx.save()
		cx.resetTransform()
		canvas.width = ctx.canvas.width
		canvas.height = ctx.canvas.height
		cx.setTransform(ctx.getTransform())
		cx.drawImage(right, 0, 0)
		cx.restore()
	}

	function loadImage(src: string) {
		return new Promise<HTMLImageElement>(resolve => {
			const image = new Image()

			image.onload = () => resolve(image)
			image.src = src
		})
	}

	let useLeft = true
	async function onFile(file: File) {
		if (!file.type.startsWith('image/')) return

		const url = URL.createObjectURL(file)
		const image = await loadImage(url)
		URL.revokeObjectURL(url)
		if (useLeft) {
			left = image
		} else {
			right = image
		}
		options = {
			width: left.width,
			height: left.height,
			render,
		}
		useLeft = !useLeft
	}
</script>

<div class="absolute inset-0" use:dropzone={onFile}>
	{#if !left}
		<p class="absolute m-4 text-gray-600 z-10">Drop two same-size images onto the page to compare ...</p>
	{/if}
	<ImageComparison class="w-full h-full">
		<canvas use:panzoom={options} slot="left" />
		<canvas bind:this={canvas} slot="right" id="right" />
	</ImageComparison>
</div>

<style>
	canvas {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		user-select: none;
		touch-action: none;
		background-color: #eee;
		overscroll-behavior: none;
		-webkit-user-select: none; /* disable selection/Copy of UIWebView */
		-webkit-touch-callout: none; /* disable the IOS popup when long-press on a link */
	}

	#right {
		pointer-events: none;
	}
</style>
