<script lang="ts">
	import type { TableDataProvider } from '$lib/data-provider/TableDataProvider.abstract';
	import { createEventDispatcher, onMount } from 'svelte';
	import type { TableColumnConfig } from './types';
	export let provider: TableDataProvider;
	export let columns: TableColumnConfig[] = [];
	export let selectable: boolean = false;

	const dispatch = createEventDispatcher();

	let selected: number = -1;
	let loading = true;
	let data: any[] = [];

	onMount(async () => {
		await init();
		setDefaultColumns();
	});

	$: if (provider) {
		provider.getData().then((result) => {
			data = result;
		});
	}

	async function init() {
		loading = true;
		data = await provider.getData();
		loading = false;
	}

	function setDefaultColumns() {
		if(columns || !data?.length) {
			return;
		}
		columns = [];
		Object.keys(data[0]).forEach((key) => {
			columns?.push({
				key,
				label: key,
			});
		});
	}

	function rowClick(index: number) {
		if(!selectable) return;
		selected = index;
		dispatch('select', data[index]);
	}
</script>

<table class="table table-striped" class:loading={loading} >
	{#if !data?.length}
		<tbody>
			<tr>
				<td>No data</td>
			</tr>
		</tbody>
	{:else}
		<thead>
			<tr>
				{#each columns as col}
					<th>{col.label}</th>
				{/each}
				{#if $$slots.buttons}
					<th></th>
				{/if}
			</tr>
		</thead>
		<tbody>
			{#each data as row, rowIndex}
				<tr on:click={() => rowClick(rowIndex)} class:table-active={selected == rowIndex}>
					{#each columns as col}
						<td>{ row[col.key] }</td>
					{/each}
					{#if $$slots.buttons}
						<td>
							<slot {row} name="buttons"></slot>
						</td>
					{/if}
				</tr>
			{/each}
		</tbody>
		{#if $$slots.footer}
			<tfoot>
				<tr>
					<td colspan={columns.length + ($$slots.buttons ? 1 : 0)}>
						<slot name="footer"></slot>
					</td>
				</tr>
			</tfoot>
		{/if}
	{/if}
</table>
