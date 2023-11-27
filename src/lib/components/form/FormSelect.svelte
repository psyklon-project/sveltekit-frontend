<script lang="ts">
	import type { AppValidationError } from '$lib/utils';

	interface IItems {
		[x: string]: unknown;
	}

	export let items: IItems[] | IItems = [];

	export let errors: AppValidationError[] = [];

	export let labelKey = 'label';

	export let valueKey = 'value';

	export let value: string | number = '';

	export let name = '';

	export let required = false;

	export let disabled = false;

	export let addDefault = true;

	export let defaultOpts = [
		{
			value: '',
			label: 'Nincs kiválasztva'
		}
	];

	$: error = errors?.find((error) => error.path === name);

</script>

<select {required} {disabled} {name} class="form-control" bind:value on:change {...$$restProps}>
	{#if addDefault}
		{#each defaultOpts as item}
			<option value={item.value}>{item.label}</option>
		{/each}
	{/if}
	{#if Array.isArray(items)}
		{#each items as item}
			<option value={item[valueKey]}>{item[labelKey]}</option>
		{/each}
	{:else if typeof items === 'object'}
		{#each Object.entries(items) as [key, value]}
			<option value={key}>{value}</option>
		{/each}
	{/if}
</select>
{#if error}
	<div class="invalid-feedback ml-2">{error}</div>
{/if}
