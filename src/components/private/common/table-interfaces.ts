export interface ColumnSettings <T>{
    property: (keyof (T & { actions: ''; })); // add actions column
    label: string;
    minWidth?: number;
    align?: 'left' | 'right' | 'center';
    format?: (value: number) => string;
    formatDate?: (value: string) => string;
}