<script lang="ts">
	export let name: string;
	export let accept = '.png,.jpg';

	export let files: FileList | null = null;
</script>

<input type="file" {name} {accept} bind:files {...$$restProps} />
