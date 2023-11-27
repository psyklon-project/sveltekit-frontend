<script lang="ts">
	import type { BodyColumnFilter } from './types';
	import { filtervalue, isBool } from './utils';

	export let colspan: number | undefined = undefined;

	export let value: any = undefined;

	export let filter: BodyColumnFilter | undefined = undefined;
</script>

<td {colspan} class:bool-mid={isBool(filter)} on:click on:dblclick>
	{#if !$$slots.default}
		{filtervalue(value, filter)}
	{:else}
		<slot />
	{/if}
</td>

<style>
	.bool-mid {
		padding-left: 2rem;
	}
</style>
