<script lang="ts">
	import Icon from '$components/Icon.svelte';
	import { mdiArrowCollapseLeft, mdiArrowCollapseRight, mdiArrowLeft, mdiArrowRight } from '@mdi/js';
	import { createEventDispatcher } from 'svelte';

	export const LIMITS = [10, 25, 50, 100];

	export let limit: number = LIMITS[0];
	export let total: number = 0;
	export let page: number = 1;

	const dispatch = createEventDispatcher();

	function dispatchChange() {
		dispatch('change', { limit, page });
	}

	function prevPage() {
		if (total === 0) {
			return;
		}
		if (page > 1) {
			page--;
		}
		dispatchChange();
	}

	function nextPage() {
		if (total === 0) {
			return;
		}
		if (page < maxPage) {
			page++;
		}
		dispatchChange();
	}

	function firstPage() {
		page = 1;
		dispatchChange();
	}

	function lastPage() {
		page = maxPage;
		dispatchChange();
	}

	$: maxPage = Math.ceil(total / limit) || 1;
	$: maxItem = Math.min(page * limit, total) || 0;
</script>

<div class="row">
	<div class="col-sm-12 col-md-5">
		<span class="text-muted">
			{(page - 1) * limit} - {maxItem} / {total}
		</span>
	</div>

	<div class="col-sm-12 col-md-7 d-flex justify-content-end gap-3">
		<div>
			<select class="form-control" bind:value={limit} on:change={() => firstPage()}>
				{#each LIMITS as option}
					<option class:selected={limit === option} value={option}>{option}</option>
				{/each}
			</select>
		</div>
		<ul class="pagination">
			<li class="page-item">
				<span
					role="button"
					tabindex="0"
					class="page-link"
					on:click={firstPage}
					on:keydown={firstPage}
					class:disabled={page === 1}
				>
					<Icon svg={mdiArrowCollapseLeft} />
				</span>
			</li>
			<li class=" page-item">
				<span
					role="button"
					tabindex="0"
					class="page-link"
					on:click={prevPage}
					on:keydown={prevPage}
					class:disabled={page === 1}
				>
					<Icon svg={mdiArrowLeft} />
				</span>
			</li>
			<li class="page-item">
				<span
					role="button"
					tabindex="0"
					class="page-link"
					on:click={nextPage}
					on:keydown={nextPage}
					class:disabled={page >= maxPage}
				>
					<Icon svg={mdiArrowRight} />
				</span>
			</li>
			<li class="page-item">
				<span
					role="button"
					tabindex="0"
					class="page-link"
					on:click={lastPage}
					on:keydown={lastPage}
					class:disabled={page >= maxPage}
				>
					<Icon svg={mdiArrowCollapseRight} />
				</span>
			</li>
		</ul>
	</div>
</div>

<style>
	.disabled {
		pointer-events: none;
		opacity: 0.5;
	}
	.pagination {
		gap: 0.2rem;
	}
	.gap-3 {
		gap: 0.3rem;
	}
</style>
