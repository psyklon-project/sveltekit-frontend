<script lang="ts">
	import type { AppValidationError } from '$lib/utils/app-validation';
	import type { HTMLFormAttributes } from 'svelte/elements';
	import Input from './FormInput.svelte';
	import Checkbox from './FormCheckbox.svelte';
	import Radio from './FormRadio.svelte';
	import Select from './FormSelect.svelte';
	import FileUpload from './FormFileUpload.svelte';
	import TextAreaEditor from './FormTextAreaEditor.svelte';

	export let form;

	export let method: HTMLFormAttributes['method'] = 'get';

	$: errors = form?.errors as AppValidationError[];
</script>

<form {...$$restProps} {method}>
	<slot {errors} {Input} {Checkbox} {Radio} {Select}  {FileUpload} {TextAreaEditor} />
</form>
