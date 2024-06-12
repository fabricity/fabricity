export enum ColumnType {
    String = 'string',
    Number = 'number'
}

export class ColumnDef {
    public name: string;
    public type: ColumnType;

    constructor(def: object)
    {
        const name = 'name' in def && typeof def.name === 'string' ? def.name : null;
        const type = ('type' in def && typeof def.type === 'string' ? def.type : 'string') as ColumnType;

        if (name === null) throw new Error('name required');
        if (!Object.values(ColumnType).includes(type)) throw new Error(`Invalid type ${type}`);

        this.name = name;
        this.type = type as ColumnType;
    }
}

export type dataValue = | string | number | null

export interface DataTableOptions {
  data: null | Record<string, dataValue>[];
  columns: null | Array<object>;
}