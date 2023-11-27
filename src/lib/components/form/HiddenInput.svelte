<script>
	export let name;
	export let value;
</script>

<input type="hidden" hidden bind:value {name} />
