import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, LinearProgress } from '@mui/material';
import TableNavbar from '../common/TableNavbar';
import { Order_By, useGetRepairRequestsQuery, type Repair_RequestFragment } from '../../../../graphql/generated';
import RowContextMenu from '../common/RowContextMenu';
import EmptyDatasource from '../common/EmptyDataSources';
import { fromIsoDate } from '../../../utils/dateUtils';
import type { ColumnSettings } from '../common/table-interfaces';

const columns: readonly ColumnSettings<Repair_RequestFragment>[] = [
    { property: 'created_at', label: 'създаден', minWidth: 100, formatDate: (value) => fromIsoDate(value) },
    { property: 'updated_at', label: 'променен', minWidth: 100, formatDate: (value) => fromIsoDate(value) },
    { property: 'logsCount', label: 'коментари', minWidth: 100 },
    // { property: 'make', label: 'Make', minWidth: 100 },
    // { property: 'model', label: 'Model', minWidth: 100 },
    // { property: 'mileage', label: 'Mileage', minWidth: 100 },
    // {
    //   id: 'population',
    //   label: 'Population',
    //   minWidth: 170,
    //   align: 'right',
    //   format: (value: number) => value.toLocaleString('en-US'),
    // }, 
    {
        property: 'actions',
        label: 'actions',
        minWidth: 60,
        align: 'right'
    }
];


export default function RepairRequestsList() {
    console.log('OOOOOOOOOOOOOO');
    //const statuses = useGetVehicleStatusesQuery().data?.vehicle_statuses;
    const vehicleStatuses: string[] = [];// ['all'];
    // const enumValues: string[] = statuses?.map(e => e.value) ?? [];
    // vehicleStatuses.push(...enumValues);
    const rowsPerPageOptions = [5, 10, 15];
    //const offset: number = this.paginator.pageIndex * this.paginator.pageSize;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
    const [condition, setCondition] = useState({});
    const { data, loading, error } = useGetRepairRequestsQuery({ variables: { limit: rowsPerPage, offset: page * rowsPerPage, condition: condition, orderBy: { created_at: Order_By.asc } } });
    console.log(data, loading, error);

    // useEffect(() => { // Listens for the data changes
    //     console.log('data changed', data);
    // }, [data]);

    //TODo: error handling

    const handleChangePage = (event: unknown, newPage: number) => {
        // console.log(event, newPage);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const filterSelectedHandler = (event: string) => {
        // const criteria = statuses?.find((e) => e.value === event);
        // const condition: Repair_Requests_Bool_Exp = criteria ? { vehicle: {status_id } : { _eq: criteria.id } } : {};
        // setCondition(condition);
    };

    const addClickedHandler = () => {
        console.log('child -> parent: add click');
        console.log('Open add user details');
        //setChildEvent(event);
    };

    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 2000); 

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableNavbar
                label={'Repair requests'}
                shouldShowAddButton={true}
                preselectedOption={vehicleStatuses[0] ?? undefined}
                options={vehicleStatuses}
                addClickedHandler={addClickedHandler}
                filterSelectedHandler={filterSelectedHandler}
            ></TableNavbar>

            {data?.repair_requests_aggregate.aggregate?.count ? (
                <div>
                    <TableContainer sx={{ height: '100%' }}>
                        <Box sx={{ width: '100%' }}>
                            {loading && <LinearProgress />}
                        </Box>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.property}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {data?.repair_requests.map((entity) => {
                                    return (
                                        <TableRow hover tabIndex={-1} key={entity.id}>
                                            {columns.map((column) => {
                                                return processColumn(column, entity);
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
                        count={data?.repair_requests_aggregate.aggregate?.count ?? 0}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>
            ) : (
                <EmptyDatasource />
            )}
        </Paper>
    );
}
function processColumn(column: ColumnSettings<Repair_RequestFragment>, user: Repair_RequestFragment) {
    const value = user[column.property as keyof Repair_RequestFragment];
    const cellValue = () => {
        switch (column.property) {
            case 'created_at':
            case 'updated_at':
                return column.formatDate?.(value) ?? '';
            case 'logsCount':
                return (value as { aggregate?: { count: number; }; }).aggregate?.count;
            // case 'make':
            // case 'model':
            // case 'mileage':
            //     return value; // same string value
            case 'actions':
                return <RowContextMenu />;
            default:
                return value;
        }
    };

    return <TableCell key={column.property} align={column.align}>
        {cellValue()}
    </TableCell>;
}

