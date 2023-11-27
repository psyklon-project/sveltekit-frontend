import type { Variety } from './variety.type';

export type ToastDefaults = {
	variety?: Variety;
	dismissible: boolean;
	timeout?: number;
};
