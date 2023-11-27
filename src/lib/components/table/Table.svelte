<script>
	import Header from './Header.svelte';
	import Body from './Body.svelte';

	export let fixedHeader = false;
	export let textNoWrap = true;
</script>

<table class="table table-hover" class:table-head-fixed={fixedHeader} class:text-nowrap={textNoWrap}>
	<slot {Header} {Body} />
</table>
