<script lang="ts">
	export let position = 0.5

	const formatter = Intl.NumberFormat('en', { style: 'percent', minimumFractionDigits: 6 })

	function drag(node: HTMLElement) {
		let down = false
		let start = 0

		function onDown(e: PointerEvent) {
			if (e.isPrimary) {
				down = true
				start = node.parentElement!.clientWidth * position
				node.setPointerCapture(e.pointerId)
			}
		}

		function onMove(e: PointerEvent) {
			if (e.isPrimary && down) {
				start += e.offsetX - 2 // half of handle width
				position = Math.max(Math.min(start / node.parentElement!.clientWidth, 1), 0)
			}
		}

		function onUp(e: PointerEvent) {
			if (e.isPrimary) {
				down = false
				node.releasePointerCapture(e.pointerId)
			}
		}

		node.addEventListener('pointerdown', onDown, { passive: true })
		node.addEventListener('pointermove', onMove, { passive: true })
		node.addEventListener('pointerup', onUp, { passive: true })
		node.addEventListener('pointercancel', onUp, { passive: true })

		return {
			destroy() {
				node.removeEventListener('pointerdown', onDown)
				node.removeEventListener('pointermove', onMove)
				node.removeEventListener('pointerup', onUp)
				node.removeEventListener('pointercancel', onUp)
			},
		}
	}
</script>

<div class={$$props.class} id="container" style:--position={formatter.format(position)}>
	<div class={$$props.class} id="left" draggable="false" on:dragstart={() => false}><slot name="left" /></div>
	<div class={$$props.class} id="right" draggable="false" on:dragstart={() => false}><slot name="right" /></div>

	<span id="handle" use:drag>
		<svg id="left-handle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
			<path
				fill-rule="evenodd"
				d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
				clip-rule="evenodd"
			/>
		</svg>

		<svg id="right-handle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
			<path
				fill-rule="evenodd"
				d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
				clip-rule="evenodd"
			/>
		</svg>
	</span>
</div>

<style>
	#container {
		position: relative;
		overflow: hidden;
	}

	div {
		display: inline-block;
	}

	#left {
		position: absolute;
	}

	#right {
		clip-path: inset(0 0 0 var(--position));
		pointer-events: none; /* allow slotted elements to listen to whatever events they want */
	}

	/* handle size: 24px - 20px borders = 4px visible */
	#handle {
		box-sizing: border-box;
		position: absolute;
		top: 0;
		left: calc(var(--position) - 12px); /* position based on middle of handle */
		height: 100%;
		width: 24px;
		background-color: #fff9;
		background-clip: padding-box; /* so background color isn't applied to border */
		border-left: 10px solid transparent; /* borders for bigger hit target */
		border-right: 10px solid transparent;
		cursor: col-resize;
		touch-action: none;
	}

	svg {
		display: block;
		position: absolute;
		color: #fff9;
		background-color: #0006;
		width: 24px;
		height: 24px;
		top: calc(50% - 12px);
		left: calc(50%);
	}

	#left-handle {
		left: calc(50% - 26px);
		border-radius: 100% 0 0 100%;
	}
	#right-handle {
		left: calc(50% + 2px);
		border-radius: 0 100% 100% 0;
	}
</style>
