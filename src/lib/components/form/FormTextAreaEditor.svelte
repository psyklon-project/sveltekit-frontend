<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import type { Quill } from 'quill';
	import 'quill/dist/quill.snow.css';
	import type { AppValidationError } from '$lib/utils';
	let editor: HTMLElement;
	let quill: Quill;

	export let name = 'text';

	export let readonly = false;

	export let required = false;

	export let errors: AppValidationError[] = [];

	$: error = errors?.find((error) => error.path === name);

	export let options: string[] | undefined = undefined;

	export let html = '';

	let value = html;
	let clazz: string | undefined = undefined;

	export { clazz as class };

	export let toolbarOptions = [
		['bold', 'italic', 'underline', 'strike'], // toggled buttons
		['blockquote', 'code-block'],

		[{ header: 1 }, { header: 2 }], // custom button values
		[{ list: 'ordered' }, { list: 'bullet' }],
		[{ script: 'sub' }, { script: 'super' }], // superscript/subscript
		[{ indent: '-1' }, { indent: '+1' }], // outdent/indent
		[{ direction: 'rtl' }], // text direction

		[{ header: [1, 2, 3, 4, 5, 6, false] }],

		[{ color: [] }, { background: [] }], // dropdown with defaults from theme
		[{ font: [] }],
		[{ align: [] }],
		['clean'] // remove formatting button
	];

	onMount(async () => {
		const { default: Quill } = await import('quill');
		if (options) {
			toolbarOptions = [...toolbarOptions, options];
		}

		quill = new Quill(editor, {
			modules: {
				toolbar: toolbarOptions
			},
			readOnly: readonly,
			theme: 'snow'
		});
		const container = editor.getElementsByClassName('ql-editor')[0];
		quill.on('text-change', function () {
			value = container.innerHTML;
			dispatch('change', value);
		});
		quill.setSelection(quill.getLength(), 0);
	});

	$: if (quill && html) {
		quill.setContents(quill.clipboard.convert(html));
	}

	const dispatch = createEventDispatcher();
</script>

<div class:is-invalid={error} class={`editor-wrapper ${clazz ?? ''}`}>
	<input {required} hidden {name} bind:value />
	<div style="color:black" bind:this={editor} />
</div>

<style>
	.editor-wrapper > * {
		height: 100%;
		border-radius: 0 0 0.6rem 0.6rem;
	}

	:global(.ql-toolbar.ql-snow) {
		border-radius: 0.6rem 0.6rem 0 0;
	}

	:global(.ql-editor) {
		min-height: 300px;
	}

	:global(.editor-wrapper.is-invalid .ql-toolbar.ql-snow) {
		border-bottom: 1px solid #dc3545;
	}

	:global(.editor-wrapper.is-invalid .ql-editor) {
		border: 1.8px solid #dc3545;
		border-radius: 0.6rem 0.6rem 0 0;
	}
</style>
