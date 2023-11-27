<script lang="ts">
	import Icon from './Icon.svelte';

	export let svg = '';

	export let width = '1.5rem';

	export let height = '1.5rem';

	export let focusable = false;

	export let type: string = '';

	export let title: string | undefined = undefined;
	let clazz: string | undefined = undefined;

	export { clazz as class };

	const htmlElement = ['submit', 'button'].includes(type) ? 'button' : 'span';
</script>

<svelte:element
	this={htmlElement}
	on:click
	on:keydown
	{...$$restProps}
	class={'btn' + (clazz ?? '')}
	role="button"
	tabindex="0"
	aria-roledescription="icon button"
>
	<Icon {svg} {width} {height} {focusable} />
	{#if title}
		<span class="icon-title">{title}</span>
	{/if}
</svelte:element>
