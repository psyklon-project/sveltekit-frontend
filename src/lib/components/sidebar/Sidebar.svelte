<script lang="ts">
	import NavItem from './NavItem.svelte';
	import type INavItem from './NavItem.interface';

	export let items: INavItem[] = [];
</script>

<aside class="main-sidebar elevation-4 sidebar-light-cyan">
	{#if $$slots.brand}
		<span class="brand-link d-flex align-items-center brand-text">
			<slot name="brand" />
		</span>
	{/if}
	<div class="sidebar">
		<nav class="mt-2">
			<ul class="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu">
				{#each items as item}
					<NavItem {...item} />
				{/each}
			</ul>
		</nav>
	</div>
</aside>

<style>
	.brand-link {
		height: 56px;
	}
</style>
