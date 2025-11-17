import type { ApolloError } from "@apollo/client";
import DatasourceError from "./DatasourceError";
import DatasourceEmptyResult from "./DataSourceEmptyResult";
import type { JSX } from "@emotion/react/jsx-runtime";
import { TableRow, TableCell } from "@mui/material";
import type { Repair_RequestFragment, UserFragment, VehicleFragment } from "../../../../../graphql/generated";
import type { ColumnSettings } from "./table-interfaces";
/**
 * Returns the appropriate fallback component based on the error and loading state.
 * If there is an error, it returns the DatasourceError component.
 * If there is no error and loading is complete, it returns the EmptyDatasource component.
 * Otherwise, it returns undefined.
 * 
 * @param error {ApolloError | undefined}
 * @param loading {boolean}
 * @returns 
 */
export function getFallbackTemplate(error: ApolloError | undefined, loading: boolean): JSX.Element | undefined {
    if (error) {
        return <DatasourceError />;
    } else if (!loading) {
        return <DatasourceEmptyResult />;
    }
}

/**
 * Builds the header row for a table based on the provided column settings.
 * 
 * @param columns {ColumnSettings<Repair_RequestFragment & UserFragment & VehicleFragment>[]}
 * @returns {JSX.Element} The constructed header row element.   
 */

// type union ColumnType = Repair_RequestFragment | UserFragment | VehicleFragment;
type allowed = Pick<ColumnSettings<Repair_RequestFragment & UserFragment & VehicleFragment>, 'property' | 'label' | 'width' | 'align'>;
export function buildHeaderRow(columns: allowed[]): JSX.Element {
    return (
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    key={column.property}
                    align={column.align}
                    width={column.width}
                    style={{ backgroundColor: '#f0f6ffff', fontSize: '16px' }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    );
}