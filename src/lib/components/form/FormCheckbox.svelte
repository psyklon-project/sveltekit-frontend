<script lang="ts">
	export let name: string;
	export let value: string | boolean | number | null;

	$: checked = value === 'true' || value === true;
</script>

{#if !checked}
	<!-- form does not send false in unchecked state -->
	<input type="hidden" hidden {name} value="false" readonly={$$props.readonly} />
{/if}
<input type="checkbox" class="form-control" {name} bind:checked {...$$restProps} />
