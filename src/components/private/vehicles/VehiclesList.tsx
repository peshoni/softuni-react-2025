import { useEffect, useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableNavbar from '../common/TableNavbar';
import { Order_By, useGetVehiclesQuery, useGetVehicleStatusesQuery, type VehicleFragment, type Vehicles_Bool_Exp } from '../../../../graphql/generated';
import RowContextMenu from '../common/RowContextMenu';
import EmptyDatasource from '../common/EmptyDataSources';
import { fromIsoDate } from '../../../utils/dateUtils';
import type { ColumnSettings } from '../common/table-interfaces';
import DatasourceError from '../common/DatasourceError';

const columns: readonly ColumnSettings<VehicleFragment>[] = [
    { property: 'created_at', label: 'Created', width: '80px', formatDate: (value) => fromIsoDate(value) },
    { property: 'updated_at', label: 'Updated', width: '80px', formatDate: (value) => fromIsoDate(value) },
    { property: 'make', label: 'Make' },
    { property: 'model', label: 'Model' },
    { property: 'actions', label: 'actions', width: '60x', align: 'right' }
];


export default function VehiclesList() {
    const abortControllerRef = useRef<AbortController | null>(null);
    const statuses = useGetVehicleStatusesQuery().data?.vehicle_statuses;
    const vehicleStatuses = ['all'];
    const enumValues: string[] = statuses?.map(e => e.code) ?? [];
    vehicleStatuses.push(...enumValues);
    const rowsPerPageOptions = [5, 10, 15];
    //const offset: number = this.paginator.pageIndex * this.paginator.pageSize;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
    const [condition, setCondition] = useState({});
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

    useEffect(() => { // Listens for the data changes
        console.log('data changed', data);
    }, [data]);



    //Todo: error handling

    const handleChangePage = (event: unknown, newPage: number) => {
        console.log(event, newPage);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const filterSelectedHandler = (event: string) => {
        const criteria = statuses?.find((e) => e.code === event);
        const condition: Vehicles_Bool_Exp = criteria ? { status_id: { _eq: criteria.id } } : {};
        setCondition(condition);
        setPage(0);
    };

    const addClickedHandler = () => {
        console.log('child -> parent: add click');
        console.log('Open add user details');
        //setChildEvent(event);
    };

    const isTableVisible: boolean = (Boolean(data?.vehicles_aggregate.aggregate?.count)) && (!error || !loading);

    let fallbackComponent;
    if (error) {
        fallbackComponent = <DatasourceError />;
    } else if (!loading) {
        fallbackComponent = <EmptyDatasource />;
    }
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableNavbar
                label={'Vehicles'}
                shouldShowAddButton={true}
                preselectedOption={vehicleStatuses[0]}
                options={vehicleStatuses}
                addClickedHandler={addClickedHandler}
                filterSelectedHandler={filterSelectedHandler}
                error={error}
                loading={loading}
            ></TableNavbar>

            {isTableVisible ? (
                <>
                    <TableContainer sx={{ height: '100%' }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
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
                            </TableHead>

                            <TableBody>
                                {data?.vehicles.map((vehicle, index) => {
                                    return (
                                        <TableRow hover tabIndex={-1} key={vehicle.id} style={{ backgroundColor: index % 2 ? '#f7f8faff' : 'white' }}>
                                            {columns.map((column) => {
                                                return processColumn(column, vehicle);
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
                fallbackComponent
            )}
        </Paper>
    );
}
function processColumn(column: ColumnSettings<VehicleFragment>, user: VehicleFragment) {
    const value = user[column.property as keyof VehicleFragment];
    const cellValue = () => {
        switch (column.property) {
            case 'created_at':
            case 'updated_at':
                return column.formatDate?.(value);
            case 'actions':
                return <RowContextMenu />;
            default: return value;
        }
    };

    return <TableCell key={column.property} align={column.align}>
        {cellValue()}
    </TableCell>;
}

