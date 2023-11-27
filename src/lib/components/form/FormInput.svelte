<script lang="ts">
	import type { AppValidationError } from '$lib/utils/app-validation';

	export let errors: AppValidationError[] = [];

	export let name: string | undefined = undefined;

	$: error = errors?.find((error) => error.path === name);

	let type = $$restProps.type ?? 'text';

	const getValue = (value: string | number | Date, type: HTMLInputElement['type']) => {
		if (type === 'number') {
			return Number(value);
		}
		if (type === 'date') {
			if (value instanceof Date) {
				return value.toISOString().split('T')[0];
			}
			return value;
		}

		if (type === 'datetime-local') {
			if (value instanceof Date) {
				return value.toISOString().split('.')[0];
			}
			return value;
		}
		return value;
	};

	$: value = getValue($$restProps.value, type);
</script>

<input {type} class="form-control" class:is-invalid={error} {name} {...$$restProps} {value} />
{#if error}
	<div class="invalid-feedback">
		{error.message}
	</div>
{/if}
