<script lang="ts">
	import Icon from '$components/Icon.svelte';
	import { mdiAlertCircleOutline, mdiCheckCircleOutline, mdiInformationOutline } from '@mdi/js';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import CloseIcon from './CloseIcon.svelte';
	import type { Variety } from './types/variety.type';

	const dispatch = createEventDispatcher();

	export let variety: Variety = 'danger';

	export let dismissible = true;
</script>

<article class={variety} role="alert" transition:fade>
	<div class="icon">
		{#if variety === 'success'}
			<Icon svg={mdiCheckCircleOutline} />
		{:else if variety === 'danger'}
			<Icon svg={mdiAlertCircleOutline} />
		{:else}
			<Icon svg={mdiInformationOutline} />
		{/if}
	</div>
	<div class="text">
		<slot />
	</div>

	{#if dismissible}
		<button class="close" on:click={() => dispatch('dismiss')}>
			<CloseIcon width="0.8em" />
		</button>
	{/if}
</article>

<style lang="postcss">
	article {
		pointer-events: auto;
		color: black;
		padding: 0.75rem 1.5rem;
		border-radius: 0.2rem;
		display: flex;
		align-items: center;
		margin: 0 auto 0.5rem auto;
		width: 20rem;
		gap: 0.2rem;
	}
	.danger {
		background: var(--danger, IndianRed);
	}
	.success {
		background: var(--success, MediumSeaGreen);
	}
	.info {
		background: var(--info, skyblue);
	}
	.warning {
		background: var(--warning, orange);
	}

	.warn {
		background: var(--warn, orange);
	}
	.text {
		margin-left: 1rem;
	}
	button {
		color: black;
		background: transparent;
		border: 0 none;
		padding: 0;
		margin: 0 0 0 auto;
		line-height: 1;
		font-size: 1rem;
	}
</style>
