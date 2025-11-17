export interface FilterFields{
    id:string | null;
    code:string;
    name:string;
}

export interface ColumnSettings<T> {
    property: (keyof (T & { actions: ''; })); // add actions column
    label: string;
    /**
     * readable CSS value for width (e.g. '100px', '10%', '5rem')
     */
    width?: string;
    align?: 'left' | 'right' | 'center';
    format?: (value: number) => string;
    formatDate?: (value: string) => string;
}