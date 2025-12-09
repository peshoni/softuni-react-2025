import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableNavbar, { type TableNavbarProps } from '../common/tables/TableNavbar';
import { Order_By, useDetachVehicleMutation, useGetVehiclesQuery, type VehicleFragment, type Vehicles_Bool_Exp } from '../../../../graphql/generated';
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
import UserContext from '../providers/UserContext';
import { useConfirmationDialog, type ConfirmationDialogOptions } from '../providers/ConfirmationDialog';
import { arrayReducer } from '../../../examples/ArrayReducer';

/**
 * Defines the columns for the vehicles table.
 */
const columns: ColumnSettings<VehicleFragment>[] = [
    { property: 'created_at', label: 'създаден', width: '80px', formatDate: (value) => fromIsoDate(value) },
    { property: 'updated_at', label: 'променен', width: '80px', formatDate: (value) => fromIsoDate(value) },
    { property: 'vin', label: 'VIN' },
    { property: 'year', label: 'година' },
    { property: 'make', label: 'производител' },
    { property: 'model', label: 'модел' },
    { property: 'plate_number', label: 'рег.номер' },
    { property: 'actions', label: 'още', width: '60x', align: 'right' }
];

export default function VehiclesList() {
    const navigate = useNavigate();
    /**
     * Confirm deletion dialog
     */
    const { confirm } = useConfirmationDialog();
    /**
     * Fetches enumeration data such as user roles and vehicle statuses.
     */
    const { vehicleStatuses } = useEnums();
    /**
     * Retrieves the current user from the UserContext.
     */
    const { userSettings } = useContext(UserContext);
    /**
     * Determines the user-specific condition for fetching vehicles.
     */
    const userCondition: Vehicles_Bool_Exp = (isNullOrUndefined(userSettings) || (userSettings.user?.user_role.code !== 'customer'))
        ? {}
        : { owner_id: { _eq: userSettings.user.id } };

    const [allowedActions, setAllowedActions] = useState<ROW_ACTIONS[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
    const [condition, setCondition] = useState<Vehicles_Bool_Exp>({ _and: [userCondition] });

    const abortControllerRef = useRef<AbortController | null>(null);
    let vehicleStatusesFilters: FilterFields[] = [];
    if (userSettings && userSettings?.user?.user_role.code !== 'customer') {
        vehicleStatusesFilters = vehicleStatuses?.map(vs => ({ id: vs.id, name: vs.name, code: vs.code })) ?? [];
    }

    // GraphQL hooks
    const [detachVehicleMutation] = useDetachVehicleMutation();
    const { data, loading, error } = useGetVehiclesQuery({
        variables: {
            limit: rowsPerPage,
            offset: page * rowsPerPage,
            condition: condition,
            orderBy: { created_at: Order_By.desc }
        },
        context: {
            fetchOptions: {
                signal: abortControllerRef.current?.signal,
            }
        }
    });

    const [vehicles, dispatch] = useReducer(arrayReducer<VehicleFragment>, []);

    useEffect(() => {
        // Create a new AbortController when the component mounts
        abortControllerRef.current = new AbortController();
        // Return a cleanup function to abort the request when the component unmounts
        return () => {
            abortControllerRef.current?.abort();
        };
    }, []);

    useEffect(() => {
        dispatch({ type: 'load', payload: data?.vehicles ?? [] });
    }, [data]);

    useEffect(() => {
        /**
         * Sets the allowed actions based on the user's role.
         */
        switch (userSettings?.user?.user_role.code) {
            case 'customer':
                setAllowedActions(['edit', 'preview', 'delete', 'repair']);
                break;
            case 'serviceSpecialist':
                setAllowedActions(['edit', 'preview']);
                break;
            case 'autoMechanic':
                setAllowedActions(['preview']);
                break;
            default:
                setAllowedActions([]);
                break;
        }
    }, [userSettings]);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const filterSelectedHandler = (selectedFilter: FilterFields) => {
        const criteria: string | null = selectedFilter.id;
        const filterCondition: Vehicles_Bool_Exp = criteria ? { status_id: { _eq: criteria } } : {};

        if (userCondition) {
            setCondition({ _and: [userCondition, filterCondition] });
        } else {
            setCondition(filterCondition);
        }

        setPage(0);
    };

    const addClickedHandler = () => {
        navigate(buildUrl(PathSegments.VEHICLES, PathSegments.DETAILS));
    };

    const rowContextMenuCallback: RowContextFunctionType = async (action: ROW_ACTIONS, id: string) => {

        console.log(action);
        // user-id ca50b248-d2fb-4eaa-8919-143330afddd1
        if (action === 'delete') {
            const vehicle = data?.vehicles.find(v => v.id === id);
            console.log(vehicle);

            const options: ConfirmationDialogOptions = {
                title: 'Изтриване на данни за автомобил',
                message: `При потвърждение, ще бъдат изтрити данните за автомобил ${vehicle?.plate_number}. Сигурни ли сте?`
            };

            const result = await confirm(options);

            if (result === 'confirmed') {
                detachVehicleMutation({ variables: { vehicleId: id } }).then(
                    (result) => {
                        if (result.data?.update_vehicles_by_pk) {
                            dispatch({ type: 'delete', payload: [result.data.update_vehicles_by_pk as VehicleFragment] });
                        }
                    }
                );
            }
        } else if (action === 'repair') {
            navigate(buildUrl(PathSegments.REPAIR_REQUESTS, PathSegments.CREATE, id));
        } else {
            navigate(buildUrl(PathSegments.VEHICLES, PathSegments.DETAILS, id), { state: { action } });
        }
    };

    const isTableVisible: boolean = (Boolean(data?.vehicles_aggregate.aggregate?.count)) && (!error || !loading);
    const navBarProps: TableNavbarProps = {
        label: 'Списък с автомобили',
        user: userSettings?.user,
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
                                {vehicles.map((vehicle, index) => {
                                    return (
                                        <TableRow hover
                                            tabIndex={-1}
                                            key={vehicle.id}
                                            style={{ backgroundColor: index % 2 ? '#f7f8faff' : 'white' }}>
                                            {columns.map((column) => {
                                                return processColumn(column, vehicle, allowedActions, rowContextMenuCallback);
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
                        count={vehicles.length ?? 0}
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

function processColumn(column: ColumnSettings<VehicleFragment>, entity: VehicleFragment, allowedActions: ROW_ACTIONS[], contextCallback: RowContextFunctionType) {
    const value = entity[column.property as keyof VehicleFragment];
    const cellValue = () => {
        switch (column.property) {
            case 'created_at':
            case 'updated_at':
                return column.formatDate?.(value);
            case 'actions':
                return <TableRowContextMenu key={entity.id} id={entity.id} allowedActions={allowedActions} callback={contextCallback} />;
            default: return value;
        }
    };

    return <TableCell key={column.property} align={column.align}>
        {cellValue()}
    </TableCell>;
}
