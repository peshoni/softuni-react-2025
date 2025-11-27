import { useContext, useEffect, useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableNavbar, { type TableNavbarProps } from '../common/tables/TableNavbar';
import { Order_By, useGetVehiclesQuery, type VehicleFragment, type Vehicles_Bool_Exp } from '../../../../graphql/generated';
import TableRowContextMenu, { type RowContextFunctionType, type ROW_ACTIONS } from '../common/tables/RowContextMenu';
import { fromIsoDate } from '../../../utils/dateUtils';
import type { ColumnSettings, FilterFields } from '../common/tables/table-interfaces';
import { useNavigate } from 'react-router';
import { buildUrl } from '../../../routes/routes-util';
import { PathSegments } from '../../../routes/enums';
import { buildHeaderRow, getFallbackTemplate } from '../common/tables/utils';
import { TableHead } from '@mui/material';
import { isNullOrUndefined } from 'is-what';
import useEnums from '../hooks/useEnums';
import { rowsPerPageOptions } from '../common/constants';
import UserContext from '../contexts/UserContext';

/**
 * Defines the columns for the vehicles table.
 */
const columns: ColumnSettings<VehicleFragment>[] = [
    { property: 'created_at', label: 'Created', width: '80px', formatDate: (value) => fromIsoDate(value) },
    { property: 'updated_at', label: 'Updated', width: '80px', formatDate: (value) => fromIsoDate(value) },
    { property: 'vin', label: 'VIN' },
    { property: 'year', label: 'year' },
    { property: 'make', label: 'Make' },
    { property: 'model', label: 'Model' },
    { property: 'plate_number', label: 'plate' },
    { property: 'actions', label: 'actions', width: '60x', align: 'right' }
];

export default function VehiclesList() {
    /**
     * Fetches enumeration data such as user roles and vehicle statuses.
     */
    const { vehicleStatuses } = useEnums();
    /**
     * Retrieves the current user from the UserContext.
     */
    const { user } = useContext(UserContext);
    /**
     * Determines the user-specific condition for fetching vehicles.
     */
    const userCondition: Vehicles_Bool_Exp = (isNullOrUndefined(user) || (user.user_role.code !== 'customer'))
        ? {}
        : { owner_id: { _eq: user.id } };

    const navigate = useNavigate();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
    const [condition, setCondition] = useState<Vehicles_Bool_Exp>({ _and: [userCondition] });

    const abortControllerRef = useRef<AbortController | null>(null);
    const vehicleStatusesFilters: FilterFields[] = vehicleStatuses?.map(vs => ({ id: vs.id, name: vs.name, code: vs.code })) ?? [];


    const { data, loading, error } = useGetVehiclesQuery({
        variables: {
            limit: rowsPerPage,
            offset: page * rowsPerPage,
            condition: condition,
            orderBy: { created_at: Order_By.asc }
        },
        context: {
            fetchOptions: {
                signal: abortControllerRef.current?.signal,
            }
        }
    });

    console.log(data, loading, error);

    useEffect(() => {
        // Create a new AbortController when the component mounts
        abortControllerRef.current = new AbortController();
        // Return a cleanup function to abort the request when the component unmounts
        return () => {
            abortControllerRef.current?.abort();
        };
    }, []);

    // useEffect(() => { // Listens for the data changes
    //     console.log('data changed', data);
    // }, [data]); 

    //Todo: error handling

    const handleChangePage = (event: unknown, newPage: number) => {
        console.log(event, newPage);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const filterSelectedHandler = (selectedFilter: FilterFields) => {
        const criteria: string | null = selectedFilter.id;
        const filterCondition: Vehicles_Bool_Exp = criteria ? { status_id: { _eq: criteria } } : {};
        console.log(condition._and);
        if (userCondition) {
            setCondition({ _and: [userCondition, filterCondition] });
        } else {
            setCondition(filterCondition);
        }

        setPage(0);
    };

    const addClickedHandler = () => {
        console.log('child -> parent: add click');
        console.log('Open add user details');
        //setChildEvent(event);
    };

    const rowContextMenuCallback: RowContextFunctionType = (action: ROW_ACTIONS, id: string) => {
        if (action === 'edit') {
            navigate(buildUrl(PathSegments.VEHICLES, PathSegments.DETAILS, id));
        }
    };

    const isTableVisible: boolean = (Boolean(data?.vehicles_aggregate.aggregate?.count)) && (!error || !loading);

    const navBarProps: TableNavbarProps = {
        label: 'Списък с автомобили',
        user,
        options: vehicleStatusesFilters,
        error,
        loading,
        addClickedHandler,
        filterSelectedHandler,
    };
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableNavbar {...navBarProps}></TableNavbar>

            {isTableVisible ? (
                <>
                    <TableContainer sx={{ height: '100%' }}>
                        <Table stickyHeader aria-label="sticky table">

                            <TableHead>
                                {buildHeaderRow(columns)}
                            </TableHead>

                            <TableBody>
                                {data?.vehicles.map((vehicle, index) => {
                                    return (
                                        <TableRow hover tabIndex={-1} key={vehicle.id} style={{ backgroundColor: index % 2 ? '#f7f8faff' : 'white' }}>
                                            {columns.map((column) => {
                                                return processColumn(column, vehicle, rowContextMenuCallback);
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={rowsPerPageOptions}
                        component="div"
                        count={data?.vehicles_aggregate.aggregate?.count ?? 0}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </>
            ) : (
                getFallbackTemplate(error, loading)
            )}
        </Paper>
    );
}

function processColumn(column: ColumnSettings<VehicleFragment>, entity: VehicleFragment, contextCallback: RowContextFunctionType) {
    const value = entity[column.property as keyof VehicleFragment];
    const cellValue = () => {
        switch (column.property) {
            case 'created_at':
            case 'updated_at':
                return column.formatDate?.(value);
            case 'actions':
                return <TableRowContextMenu key={entity.id} id={entity.id} callback={contextCallback} />;
            default: return value;
        }
    };

    return <TableCell key={column.property} align={column.align}>
        {cellValue()}
    </TableCell>;
}
