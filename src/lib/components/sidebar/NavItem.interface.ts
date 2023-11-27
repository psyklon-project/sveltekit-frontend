export default interface INavItem {
	title: string;
	path?: string;
	active?: boolean;
	open?: boolean;
	icon?: string;
	items?: INavItem[];
}
