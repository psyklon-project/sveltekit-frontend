<script lang="ts">
	import type { ApiDataProvider } from '$lib/data-provider/ApiDataProvider';
	import Table from '../table/Table.svelte';

	export let provider: ApiDataProvider;
</script>

<Table {provider} {...$$restProps}>
	<slot slot="buttons" name="buttons" let:row >
		<a class="btn btn-primary" href="/patient/{row.id}">Részletek</a>
	</slot>
	<slot name="footer">

	</slot>
</Table>
