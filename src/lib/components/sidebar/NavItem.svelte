<script lang="ts">
	import { browser } from '$app/environment';
	import { createEventDispatcher } from 'svelte';
	import type INavItem from './NavItem.interface';
	import IconButton from '$components/IconButton.svelte';
	import Icon from '$components/Icon.svelte';
	import { t } from '$translation';

	export let open = false;

	export let active = false;

	export let path: string | undefined = undefined;

	export let title = '';

	export let icon: string | undefined = undefined;

	let clazz = '';
	export { clazz as class };

	export let items: INavItem[] = [];
	const dispatch = createEventDispatcher();

	function toggle(e) {
		if (items?.length) {
			open = !open;
		}
		e.stopPropagation();
		dispatch('click');
	}

	//find items recursively
	const findActive = (items: INavItem[]): boolean => {
		for (const item of items) {
			if (item.path === currentPath) {
				return true;
			} else if (item.items) {
				const active = findActive(item.items);

				if (active) {
					return true;
				}
			}
		}

		return false;
	};

	// if icon clicked and has items, pick first item
	const onNavIconClick = () => {
		if (items?.length) {
			const path = items[0].path;

			if (path) {
				if (browser) {
					window.location.href = path;
				}
			}
		}
	};
	$: currentPath = browser ? window.location.pathname : null;
	$: active = open = path === currentPath || findActive(items);
</script>

<li class:menu-open={open} class={`nav-item ${clazz}`}>
	<a href={path} on:click={toggle} class="nav-link" class:active>
		{#if icon}
			{#if items && items.length > 0}
				<IconButton svg={icon} on:click={onNavIconClick} />
			{:else}
				<Icon svg={icon} class="nav-icon" />
			{/if}
		{/if}
		<p>{$t(title)}</p>
	</a>
	{#if items && items.length > 0}
		<ul class="nav nav-treeview">
			{#each items as item}
				<svelte:self {...item} />
			{/each}
		</ul>
	{/if}
</li>

<style>
	a.nav-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
