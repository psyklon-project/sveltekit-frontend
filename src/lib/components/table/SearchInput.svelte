<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let search = '';
	export let placeholder: string = '';
	const dispatch = createEventDispatcher();

	const onInput = (event: Event) => {
		const target = event.target as HTMLInputElement;

		search = target.value;
		dispatch('change', {
			search: target.value
		});
	};
</script>

<input type="text" class="form-control" {placeholder} bind:value={search} on:input={onInput} />
