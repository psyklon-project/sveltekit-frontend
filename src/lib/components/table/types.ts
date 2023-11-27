import type { DotBranch } from '$types';

export interface TableColumn<T extends Record<string, any> = Record<string, any>> {
	key: DotBranch<T>;
	label: string;
}

export interface TableHeaderColumn<T extends Record<string, any> = Record<string, any>> extends TableColumn<T> {
	sortable?: boolean;
}

export interface TableBodyColumn<T extends Record<string, any> = Record<string, any>> extends TableColumn<T> {
	filter?: BodyColumnFilter;
}

export type BodyColumnFilter =
	| 'date'
	| 'datetime'
	| 'time'
	| 'currency'
	| 'number'
	| 'percent'
	| 'phone'
	| 'email'
	| 'uppercase'
	| 'lowercase'
	| 'capitalize'
	| 'capitalizeall'
	| 'capitalizefirst'
	| 'bool'
	| 'boolean'
	| 'minutes';
