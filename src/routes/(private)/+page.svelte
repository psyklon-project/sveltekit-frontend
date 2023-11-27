<script lang="ts">
	// import type { PageData } from "./$types";
	import { ApiDataProvider } from "$lib/data-provider/ApiDataProvider"
	import PaginatedTable from "$components/paginetedtable/PaginatedTable.svelte";

	// export let data : PageData;

	let tableProvider = new ApiDataProvider(new URL('http://192.168.50.189:3001/v1/company-patient'));
	let tableConfig = [
		{
			key: 'id',
			label: 'ÁJDÍ'
		},
		{
			key: 'name',
			label: 'Név'
		}
	];
</script>

<PaginatedTable provider={tableProvider} columns={tableConfig} selectable on:select={(ev) => console.log(ev.detail)}>
	
</PaginatedTable>
