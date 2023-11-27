import { TableDataProvider } from './TableDataProvider.abstract';

export interface DataProviderMetadata extends Record<string, unknown> {
	page: number;
	pageSize: number;
	total: number;
	pageCount: number;
	hasPreviousPage: boolean;
	hasNextPage: boolean;
}

export class ApiDataProvider extends TableDataProvider {

	private readonly fetchResult: Promise<{
		data: Array<Record<string, unknown>>;
		meta: DataProviderMetadata;
	}> | null = null;

	private metadata: DataProviderMetadata | null = null;

	constructor(private readonly endpoint: URL) {
		super();
		this.fetchResult = fetch(this.endpoint).then(r => r.json());
	}

	async getData(): Promise<Array<Record<string, unknown>>> {
		const result = await this.fetchResult

		if (!result) return []
		const { data = [], meta = null } = result;

		this.metadata = meta;
		return data;
	}

	getMetadata(): DataProviderMetadata | null {
		return this.metadata;
	}

}
