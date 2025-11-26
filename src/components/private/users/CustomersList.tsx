import { useEffect, useRef, useState } from 'react';
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
import type { UserAuthorizationProps } from '../common/interfaces';
import useEnums from '../hooks/useEnums';
import { rowsPerPageOptions } from '../common/constants';

const columns: ColumnSettings<UserFragment>[] = [
  { property: 'created_at', label: 'Създаден', width: '80px', formatDate: (value) => fromIsoDate(value) },
  { property: 'updated_at', label: 'Промемен', width: '80px', formatDate: (value) => fromIsoDate(value) },
  { property: 'user_role', label: 'Роля' },
  { property: 'first_name', label: 'Име' },
  { property: 'last_name', label: 'Фамилия' },
  { property: 'actions', label: 'actions', width: '60px', align: 'right' }
];

export default function CustomersList({ user }: Readonly<UserAuthorizationProps>) {
  const navigate = useNavigate();
  const abortControllerRef = useRef<AbortController | null>(null);

  const { userRoles } = useEnums();

  let allRoles: FilterFields[] = Object.values(userRoles.map(e => ({ id: e.id, code: e.code, name: e.name }))); 

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const [condition, setCondition] = useState({});
  const offset: number = page * rowsPerPage;

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

  console.log(data, loading, error);

  useEffect(() => { // Listens for the data changes 
    console.log('data changed');
    if (error) {
      allRoles = [];
    }
  }, [error]);

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
    const condition: Users_Bool_Exp = criteria ? { role_id: { _eq: criteria } } : {};
    setCondition(condition);
    setPage(0);
  };

  const addClickedHandler = () => {
    console.log('child -> parent: add click');
    console.log('Open add user details');
    //setChildEvent(event);
  };

  const rowContextMenuCallback: RowContextFunctionType = (action: ROW_ACTIONS, id: string) => {
    if (action === 'edit') {
      navigate(buildUrl(PathSegments.CUSTOMERS, PathSegments.DETAILS, id));
    }
  };

  const isTableVisible: boolean = (Boolean(data?.users_aggregate.aggregate?.count)) && (!error || !loading);

  const navBarProps: TableNavbarProps = {
    label: 'Списък с потребители',
    user,
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
                        return processColumn(column, user, rowContextMenuCallback);
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

function processColumn(column: ColumnSettings<UserFragment>, entity: UserFragment, contextCallback: RowContextFunctionType) {
  const value = entity[column.property as keyof UserFragment];
  const cellValue = () => {
    switch (column.property) {
      case 'created_at':
      case 'updated_at':
        return column.formatDate?.(value);
      case 'user_role':
        return (value as RoleFragment).name;
      case 'actions':
        return <TableRowContextMenu key={entity.id} id={entity.id} callback={contextCallback} />;
      default: return value;
    }
  };

  return <TableCell key={column.property} align={column.align}  >
    {cellValue()}
  </TableCell>;
}

