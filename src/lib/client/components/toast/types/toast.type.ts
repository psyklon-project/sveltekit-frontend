import type { Variety } from './variety.type';

export type Toast = {
	id: number;
	variety?: Variety;
	dismissible?: boolean;
	timeout?: number;
	message: string;
};

export type ToastWithoutId = Omit<Toast, 'id'>;
