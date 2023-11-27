<script lang="ts">
	import type { AppValidationError } from '$lib/utils/app-validation';
	import { createEventDispatcher } from 'svelte';

	export let name: string;

	export let errors: AppValidationError[] = [];
	
	export let items: Record<string, any> | Record<string, any>[];
	
	export let group: string | undefined = undefined;
	const dispatch = createEventDispatcher();
	$: error = errors?.find((error) => error.path === name);
</script>

<div class="form-group">
	<div class="radios">
		{#if Array.isArray(items)}
			{#each items as item}
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						{name}
						value={item.value}
						bind:group
						class:is-invalid={error}
						on:click={() => {
							dispatch('click', item.value);
						}}
						{...$$restProps} 
					/>
					<label class="form-check-label" for={item.name}>{item.name}</label>
				</div>
			{/each}
		{:else}
			{#each Object.entries(items) as [key, value]}
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						{name}
						value={key}
						bind:group
						class:is-invalid={error}
						on:click={() => {
							dispatch('click', key);
						}}
						{...$$restProps} 
					/>
					<label class="form-check-label" for={name}>{value}</label>
				</div>
			{/each}
		{/if}
	</div>
	{#if error}
		<div class="invalid-feedback ml-2">{error}</div>
	{/if}
</div>

<style>
	.radios {
		display: flex;
		gap: 1rem;
	}
</style>
