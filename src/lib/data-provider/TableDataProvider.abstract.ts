export abstract class TableDataProvider {
	abstract getData(): Promise<Array<Record<string, unknown>>>;
}
