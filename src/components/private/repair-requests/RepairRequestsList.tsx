import { useContext, useEffect, useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableNavbar, { type TableNavbarProps } from "../common/tables/TableNavbar";
import { Order_By, useGetRepairRequestsQuery, type Repair_RequestFragment, type Repair_Requests_Bool_Exp, type Vehicle_StatusFragment, } from "../../../../graphql/generated";
import TableRowContextMenu, { type ROW_ACTIONS, type RowContextFunctionType } from "../common/tables/RowContextMenu";
import { fromIsoDate } from "../../../utils/dateUtils";
import type { ColumnSettings, FilterFields } from "../common/tables/table-interfaces";
import { useNavigate } from "react-router";
import { PathSegments } from "../../../routes/enums";
import { buildUrl } from "../../../routes/routes-util";
import { buildHeaderRow, getFallbackTemplate as getTableFallbackElement } from "../common/tables/utils";
import { TableHead } from "@mui/material";
import useEnums from "../hooks/useEnums";
import { rowsPerPageOptions } from "../common/constants";
import UserContext from "../contexts/UserContext";

const columns: ColumnSettings<Repair_RequestFragment>[] = [
    { property: "created_at", label: "създаден", width: "80px", formatDate: (value) => fromIsoDate(value), },
    { property: "updated_at", label: "променен", width: "100px", formatDate: (value) => fromIsoDate(value), },
    { property: "title", label: "описание" },
    { property: "vehicle_status", label: "статус" },
    { property: "logsCount", label: "бележки" },
    { property: "actions", label: "actions", width: "60px", align: "right" },
];

export default function RepairRequestsList() {
    const navigate = useNavigate();
    const { genders, userRoles, vehicleStatuses } = useEnums();
    console.log(genders, userRoles, vehicleStatuses);
    let vehicleStatusesFilters: FilterFields[] = vehicleStatuses?.map(e => ({ id: e.id, name: e.name, code: e.code })) ?? [];

    const { user } = useContext(UserContext);

    let userCondition: Repair_Requests_Bool_Exp | null = {};
    const abortControllerRef = useRef<AbortController | null>(null);

    if (user) {
        if (user.user_role.code === 'autoMechanic') {
            userCondition = { _and: [{ vehicle_status: { code: { _eq: 'under-repair' } } }, { automechanic_id: { _eq: user.id } }] };
            vehicleStatusesFilters = [];
        }
    }

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
    const [condition, setCondition] = useState<Repair_Requests_Bool_Exp>(userCondition);
    const offset: number = page * rowsPerPage;

    const { data, loading, error } = useGetRepairRequestsQuery({
        variables: {
            limit: rowsPerPage,
            offset: offset,
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

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const filterSelectedHandler = (selectedFilter: FilterFields) => {
        console.log(selectedFilter);
        const criteria: string | null = selectedFilter.id;

        const filterCondition: Repair_Requests_Bool_Exp = criteria ? { status_id: { _eq: criteria } } : {};
        if (userCondition) {
            filterCondition._and = filterCondition._and ? [...(filterCondition._and), userCondition] : [userCondition];
            // setCondition(userCondition);
        }
        //else {
        setCondition(filterCondition);
        // }
        setPage(0);
    };

    const addClickedHandler = () => {
        console.log("child -> parent: add click");
        console.log("Open add user details");
        //setChildEvent(event);
    };

    const rowContextMenuCallback: RowContextFunctionType = (action: ROW_ACTIONS, id: string) => {
        if (action === 'edit') {
            navigate(buildUrl(PathSegments.REPAIR_REQUESTS, PathSegments.DETAILS, id));
        }
    };

    const isTableVisible: boolean = Boolean(data?.repair_requests_aggregate.aggregate?.count) && (!error || !loading);
    const navBarProps: TableNavbarProps = {
        label: "Заявки за ремонт",
        user,
        options: vehicleStatusesFilters,
        error,
        loading,
        addClickedHandler,
        filterSelectedHandler,
    };

    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableNavbar {...navBarProps}></TableNavbar>

            {isTableVisible ? (
                <div>
                    <TableContainer sx={{ height: "100%" }}>
                        <Table stickyHeader aria-label="sticky table">

                            <TableHead>
                                {buildHeaderRow(columns)}
                            </TableHead>

                            <TableBody>
                                {data?.repair_requests.map((entity, index) => {
                                    return (
                                        <TableRow hover tabIndex={-1} key={entity.id} style={{ backgroundColor: index % 2 ? '#f7f8faff' : 'white' }}>
                                            {columns.map((column) => {
                                                return processColumn(column, entity, rowContextMenuCallback);
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
                getTableFallbackElement(error, loading)
            )}
        </Paper>
    );
}
function processColumn(column: ColumnSettings<Repair_RequestFragment>, entity: Repair_RequestFragment, contextCallback: RowContextFunctionType) {
    const value = entity[column.property as keyof Repair_RequestFragment];
    const cellValue = () => {
        switch (column.property) {
            case "created_at":
            case "updated_at":
                return column.formatDate?.(value);
            case "logsCount":
                return (value as { aggregate?: { count: number; }; }).aggregate?.count;
            case "vehicle_status":
                return (value as Vehicle_StatusFragment).name;
            case "actions":
                return <TableRowContextMenu key={entity.id} id={entity.id} callback={contextCallback} />;
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
