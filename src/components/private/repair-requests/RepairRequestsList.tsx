import { useEffect, useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableNavbar, { type TableNavbarProps } from "../common/TableNavbar";
import { Order_By, useGetRepairRequestsQuery, type Repair_RequestFragment, } from "../../../../graphql/generated";
import RowContextMenu from "../common/RowContextMenu";
import EmptyDatasource from "../common/EmptyDataSources";
import { fromIsoDate } from "../../../utils/dateUtils";
import type { ColumnSettings } from "../common/table-interfaces";
import DatasourceError from "../common/DatasourceError";

const columns: readonly ColumnSettings<Repair_RequestFragment>[] = [
    { property: "created_at", label: "създаден", width: "80px", formatDate: (value) => fromIsoDate(value), },
    { property: "updated_at", label: "променен", width: "100px", formatDate: (value) => fromIsoDate(value), },
    { property: "logsCount", label: "коментари" },
    { property: "actions", label: "actions", width: "60px", align: "right" },
];

export default function RepairRequestsList() {
    const abortControllerRef = useRef<AbortController | null>(null);
    console.log("OOOOOOOOOOOOOO");
    //const statuses = useGetVehicleStatusesQuery().data?.vehicle_statuses;
    const vehicleStatuses: string[] = []; // ['all'];
    // const enumValues: string[] = statuses?.map(e => e.value) ?? [];
    // vehicleStatuses.push(...enumValues);
    const rowsPerPageOptions = [5, 10, 15];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
    const [condition, setCondition] = useState({});

    const { data, loading, error } = useGetRepairRequestsQuery({
        variables: {
            limit: rowsPerPage,
            offset: page * rowsPerPage,
            condition: condition,
            orderBy: { created_at: Order_By.asc }
        },
        context: {
            fetchOptions: {
                signal: abortControllerRef.current?.signal,
            },
        },
    });
    console.log(data, loading, error);

    // useEffect(() => { // Listens for the data changes
    //     console.log('data changed', data);
    // }, [data]);
    useEffect(() => {
        // Create a new AbortController when the component mounts
        abortControllerRef.current = new AbortController();

        // Return a cleanup function to abort the request when the component unmounts
        return () => {
            abortControllerRef.current?.abort();
        };
    }, []);

    //TODo: error handling

    const handleChangePage = (event: unknown, newPage: number) => {
        console.log(event, newPage);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const filterSelectedHandler = (event: string) => {
        console.log(event);
        // const criteria = statuses?.find((e) => e.value === event);
        // const condition: Repair_Requests_Bool_Exp = criteria ? { vehicle: {status_id } : { _eq: criteria.id } } : {};
        // setCondition(condition);
        setPage(0);
    };

    const addClickedHandler = () => {
        console.log("child -> parent: add click");
        console.log("Open add user details");
        //setChildEvent(event);
    };

    const isTableVisible: boolean = Boolean(data?.repair_requests_aggregate.aggregate?.count) && (!error || !loading);
    const navBarProps: TableNavbarProps = {
        label: "Repair requests",
        shouldShowAddButton: true,
        preselectedOption: vehicleStatuses[0] ?? undefined,
        options: vehicleStatuses,
        error,
        loading,
        addClickedHandler,
        filterSelectedHandler,
    };

    let fallbackComponent;
    if (error) {
        fallbackComponent = <DatasourceError />;
    } else if (!loading) {
        fallbackComponent = <EmptyDatasource />;
    }
    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableNavbar {...navBarProps}></TableNavbar>

            {isTableVisible ? (
                <div>
                    <TableContainer sx={{ height: "100%" }}>
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
                                {data?.repair_requests.map((entity, index) => {
                                    return (
                                        <TableRow hover tabIndex={-1} key={entity.id} style={{ backgroundColor: index % 2 ? '#f7f8faff' : 'white' }}>
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
                fallbackComponent
            )}
        </Paper>
    );
}
function processColumn(
    column: ColumnSettings<Repair_RequestFragment>,
    user: Repair_RequestFragment
) {
    const value = user[column.property as keyof Repair_RequestFragment];
    const cellValue = () => {
        switch (column.property) {
            case "created_at":
            case "updated_at":
                return column.formatDate?.(value);
            case "logsCount":
                return (value as { aggregate?: { count: number } }).aggregate?.count;
            case "actions":
                return <RowContextMenu />;
            default:
                return value;
        }
    };

    return (
        <TableCell key={column.property} align={column.align} width={column.width}>
            {cellValue()}
        </TableCell>
    );
}
