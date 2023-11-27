<script lang="ts">
	export let svg: string | undefined = undefined;

	export let width: string | number = '1.5rem';

	export let height: string | number = '1.5rem';

	export let focusable = false;

	let clazz = '';
	export { clazz as class };

	const isPath = (svg: string | undefined) => {
		if (svg) {
			return svg.startsWith('/');
		}

		return false;
	};
</script>

{#if isPath(svg)}
	<span role="button" tabindex="0" on:click on:keydown>
		<img alt="" class={clazz} src={svg} {width} {height} />
	</span>
{:else}
	<svg
		class={clazz}
		on:click
		on:keydown
		role="button"
		tabindex="0"
		focusable={focusable.toString()}
		{width}
		{height}
	>
		<path d={svg} />
	</svg>
{/if}
