import { useContext, useEffect, useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableNavbar, { type TableNavbarProps } from '../common/tables/TableNavbar';
import { Order_By, useGetUsersQuery, type RoleFragment, type UserFragment, type Users_Bool_Exp } from '../../../../graphql/generated';
import TableRowContextMenu, { type ROW_ACTIONS, type RowContextFunctionType } from '../common/tables/RowContextMenu';
import { fromIsoDate } from '../../../utils/dateUtils';
import type { ColumnSettings, FilterFields } from '../common/tables/table-interfaces';
import { useNavigate } from 'react-router';
import { buildUrl } from '../../../routes/routes-util';
import { PathSegments } from '../../../routes/enums';
import { buildHeaderRow, getFallbackTemplate } from '../common/tables/utils';
import useEnums from '../hooks/useEnums';
import { rowsPerPageOptions } from '../common/constants';
import UserContext from '../providers/UserContext';

const columns: ColumnSettings<UserFragment>[] = [
    { property: 'created_at', label: 'създаден', width: '80px', formatDate: (value) => fromIsoDate(value) },
    { property: 'updated_at', label: 'промемен', width: '80px', formatDate: (value) => fromIsoDate(value) },
    { property: 'user_role', label: 'роля' },
    { property: 'first_name', label: 'име' },
    { property: 'last_name', label: 'фамилия' },
    { property: 'phone', label: 'телефон' },
    { property: 'email', label: 'ел.поща' },
    { property: 'actions', label: 'опции', width: '60px' }
];

export default function CustomersList() {
    const navigate = useNavigate();
    const abortControllerRef = useRef<AbortController | null>(null);

    const { userRoles } = useEnums();
    /**
     * Retrieves the current user from the UserContext.
     */
    const { userSettings } = useContext(UserContext);

    let allRoles: FilterFields[] = Object.values(userRoles.map(e => ({ id: e.id, code: e.code, name: e.name })));

    // Table states
    const [allowedActions, setAllowedActions] = useState<ROW_ACTIONS[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
    const offset: number = page * rowsPerPage;
    const [condition, setCondition] = useState({});

    const { data, loading, error } = useGetUsersQuery({
        variables: {
            limit: rowsPerPage,
            offset, condition:
                condition,
            orderBy: { created_at: Order_By.asc }
        },
        context: {
            fetchOptions: {
                signal: abortControllerRef.current?.signal,
            }
        }
    });

    useEffect(() => {
        // Create a new AbortController when the component mounts
        abortControllerRef.current = new AbortController();
        // Return a cleanup function to abort the request when the component unmounts
        return () => {
            abortControllerRef.current?.abort();
        };
    }, []);

    useEffect(() => { // Listens for the data changes  
        if (error) {
            allRoles = [];
        }
    }, [error]);

    useEffect(() => {
        /**
         * Sets the allowed actions based on the user's role.
         */
        switch (userSettings?.user?.user_role.code) {
            case 'customer':
                setAllowedActions(['preview']);
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
        const condition: Users_Bool_Exp = criteria ? { role_id: { _eq: criteria } } : {};
        setCondition(condition);
        setPage(0);
    };

    const addClickedHandler = () => {
    };

    const rowContextMenuCallback: RowContextFunctionType = (action: ROW_ACTIONS, id: string) => {
        navigate(buildUrl(PathSegments.CUSTOMERS, PathSegments.DETAILS, id), { state: { action } });
    };

    const isTableVisible: boolean = (Boolean(data?.users_aggregate.aggregate?.count)) && (!error || !loading);

    const navBarProps: TableNavbarProps = {
        label: 'Списък с потребители',
        user: userSettings?.user,
        options: allRoles,
        error,
        loading,
        addClickedHandler,
        filterSelectedHandler,
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>

            <TableNavbar {...navBarProps}></TableNavbar>

            {isTableVisible ? (
                <div>
                    <TableContainer sx={{ height: '100%' }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                {buildHeaderRow(columns)}
                            </TableHead>

                            <TableBody>
                                {data?.users.map((user, index) => {
                                    return (
                                        <TableRow hover tabIndex={-1} key={user.id} style={{ backgroundColor: index % 2 ? '#f7f8faff' : 'white' }}>
                                            {columns.map((column) => {
                                                return processColumn(column, user, allowedActions, rowContextMenuCallback);
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
                        count={data?.users_aggregate.aggregate?.count ?? 0}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>
            ) : (
                getFallbackTemplate(error, loading)
            )}
        </Paper>
    );
}

function processColumn(column: ColumnSettings<UserFragment>, entity: UserFragment, allowedActions: ROW_ACTIONS[], contextCallback: RowContextFunctionType) {
    const value = entity[column.property as keyof UserFragment];
    const cellValue = () => {
        switch (column.property) {
            case 'created_at':
            case 'updated_at':
                return column.formatDate?.(value);
            case 'user_role':
                return (value as RoleFragment).name;
            case 'actions':
                return <TableRowContextMenu key={entity.id} id={entity.id} allowedActions={allowedActions} callback={contextCallback} />;
            default: return value;
        }
    };

    return <TableCell key={column.property} align='center' sx={{ fontFamily: 'inherit', fontSize: '16px' }} >
        {cellValue()}
    </TableCell>;
}
