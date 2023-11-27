<script lang="ts">
	import { mdiContentSaveOutline } from '@mdi/js';
	import { onMount } from 'svelte';
	import IconButton from './IconButton.svelte';

	let savcontroller: HTMLElement;

	const makeFloatingSaveButton = (e: Event) => {
		if (savcontroller && e.target) {
			savcontroller.classList.add('btn-floating');
			savcontroller.style.top = `${document?.scrollingElement?.scrollTop ?? 0 + 70}px`;
		}
	};

	onMount(() => {
		window.addEventListener('scroll', makeFloatingSaveButton);
	});

	const onSubmit = (e) => {
		const form = e.target.closest('form');
		if (form) {
			form.querySelector(':invalid')?.closest('.collapsed-card')?.querySelector('.card-header')?.click();
			if (form.checkValidity()) {
				form.submit();
			} else {
				setTimeout(() => {
					form.reportValidity();
				}, 0);
			}
		}
	};
</script>

<div class="row d-flex mb-2 mr-2 justify-content-end btn-floating" bind:this={savcontroller}>
	<IconButton svg={mdiContentSaveOutline} on:click={(e) => onSubmit(e)} title="Mentés" />
</div>

<style>
	.btn-floating {
		position: fixed;
		top: 85px;
		z-index: 1000;
		right: 1rem;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
	}
</style>
