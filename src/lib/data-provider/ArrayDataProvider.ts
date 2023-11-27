import { TableDataProvider } from './TableDataProvider.abstract';


export class ArrayDataProvider extends TableDataProvider {

	constructor(private readonly data: Array<Record<string, unknown>>) {
		super();
	}

	getData(): Promise<Array<Record<string, unknown>>> {
		return Promise.resolve(this.data);
	}

}
