<script lang="ts">
    export let selected = false;
	import BodyColumn from './BodyColumn.svelte';
	import HeaderColumn from './HeaderColumn.svelte';
</script>

<tr class:selected on:click on:dblclick on:contextmenu>
	<slot {BodyColumn}  {HeaderColumn} />
</tr>
