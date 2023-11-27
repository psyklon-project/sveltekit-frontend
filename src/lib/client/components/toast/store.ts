import { type Writable, writable } from 'svelte/store';
import type { Toast, ToastWithoutId } from './types/toast.type';
import type { ToastDefaults } from './types/toastDefaults.type';

export const toasts = writable([]) as Writable<Toast[]>;

const addToast = (toast: ToastWithoutId): void => {
	// Create a unique ID so we can easily find/remove it
	// if it is dismissible/has a timeout.
	const id = Math.floor(Math.random() * 10000);

	// Push the toast to the top of the list of toasts
	toasts.update((all: Toast[]) => {
		return [{ id, ...toast }, ...all];
	});

	// If toast is dismissible, dismiss it after "timeout" amount of time.
	if (toast.timeout) {
		setTimeout(() => dismissToast(id), toast.timeout);
	}
};

export const dismissToast = (id: number): void => {
	toasts.update((all: Toast[]) => all.filter((t) => t.id !== id));
};
// Setup some sensible defaults for a toast.
const defaults: ToastDefaults = {
	dismissible: true,
	timeout: 4000
};

export const success = (toast: Toast | string = 'Sikeres mentés!'): void => {
	if (typeof toast === 'string') {
		return addToast({ ...defaults, message: toast, variety: 'success' });
	}
	addToast({ ...defaults, ...(toast as Toast), variety: 'success' });
};

export const info = (toast: Toast | string): void => {
	if (typeof toast === 'string') {
		return addToast({ ...defaults, message: toast, variety: 'info' });
	}
	addToast({ ...defaults, ...(toast as Toast), variety: 'info' });
};

export const warning = (toast: Toast | string): void => {
	if (typeof toast === 'string') {
		return addToast({ ...defaults, message: toast, variety: 'warn' });
	}
	addToast({ ...defaults, ...(toast as Toast), variety: 'warn' });
};

export const danger = (toast: Toast | string = 'Hiba történt a mentés során!'): void => {
	if (typeof toast === 'string') {
		return addToast({ ...defaults, message: toast, variety: 'danger' });
	}
	addToast({ ...defaults, ...(toast as Toast), variety: 'danger' });
};
