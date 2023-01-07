<script lang="ts">
	import ImageComparison from '$lib'
	import { panzoom, type Options } from 'svelte-pan-zoom'
	import { base } from '$app/paths'
	import { onMount } from 'svelte'

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

		console.log(ctx.getTransform())

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

	onMount(async () => {
		// prettier-ignore
		[left, right] = await Promise.all([
      loadImage(base + '/animal-ga395c165e_1920a.webp'),
      loadImage(base + '/animal-ga395c165e_1920b.webp'),
    ])

		cx = canvas.getContext('2d')!

		options = {
			width: left.width,
			height: left.height,
			render,
		}
	})
</script>

<p>Using with <a href="https://www.npmjs.com/package/svelte-pan-zoom">svelte-pan-zoom</a></p>

<ImageComparison>
	<canvas use:panzoom={options} slot="left" />
	<canvas bind:this={canvas} slot="right" id="right" />
</ImageComparison>

<style>
	canvas {
		box-sizing: border-box;
		width: 960px;
		height: 640px;
		user-select: none;
		touch-action: none;
		background-color: #ccc;
		overscroll-behavior: none;
		-webkit-user-select: none; /* disable selection/Copy of UIWebView */
		-webkit-touch-callout: none; /* disable the IOS popup when long-press on a link */
	}

	#right {
		pointer-events: none;
	}
</style>
