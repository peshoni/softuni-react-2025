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
import { Order_By, User_Roles_Enum, useGetUsersQuery, type UserFragment, type Users_Bool_Exp } from '../../../../graphql/generated';
import RowContextMenu from '../common/RowContextMenu';
import EmptyDatasource from '../common/EmptyDataSources';
import { fromIsoDate } from '../../../utils/dateUtils';
import type { ColumnSettings } from '../common/table-interfaces';
import DatasourceError from '../common/DatasourceError';


const columns: readonly ColumnSettings<UserFragment>[] = [
  { property: 'created_at', label: 'Created', minWidth: 100, formatDate: (value) => fromIsoDate(value) },
  { property: 'updated_at', label: 'Updated', minWidth: 100, formatDate: (value) => fromIsoDate(value) },
  { property: 'name', label: 'Name', minWidth: 100 },
  { property: 'surname', label: 'Surname', minWidth: 100 },
  { property: 'family', label: 'Family', minWidth: 100 },
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


export default function UsersList() {
  const userRoles = ['all', ...Object.values(User_Roles_Enum).map(e => e.toString())];
  const rowsPerPageOptions = [5, 10, 15];
  //const offset: number = this.paginator.pageIndex * this.paginator.pageSize;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const [condition, setCondition] = useState({});

  const { data, loading, error } = useGetUsersQuery({
    variables: { limit: rowsPerPage, offset: page * rowsPerPage, condition: condition, orderBy: { name: Order_By.asc } }
  });


  console.log(data, loading, error);
  useEffect(() => { // Listens for the data changes
    console.log('data changed');
  }, [data]);

  //TODo: error handling

  const handleChangePage = (event: unknown, newPage: number) => {
    // console.log(event, newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    //  console.log(+event.target.value);
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filterSelectedHandler = (event: string) => {
    const condition: Users_Bool_Exp = event === 'all' ? {} : { role: { _eq: event as User_Roles_Enum } };
    setCondition(condition);
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
        label={'Users list'}
        shouldShowAddButton={true}
        preselectedOption='all'
        options={userRoles}
        addClickedHandler={addClickedHandler}
        filterSelectedHandler={filterSelectedHandler}
      ></TableNavbar>
      {(data?.users_aggregate.aggregate?.count || !error) ? (
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
                {data?.users.map((user) => {
                  return (
                    <TableRow hover tabIndex={-1} key={user.id}>
                      {columns.map((column) => {
                        return processColumn(column, user);
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
        error ? <DatasourceError /> : <EmptyDatasource />
      )}
    </Paper>
  );

}
function processColumn(column: ColumnSettings<UserFragment>, user: UserFragment) {
  const value = user[column.property as keyof UserFragment];
  const cellValue = () => {
    switch (column.property) {
      case 'created_at':
      case 'updated_at':
        return column.formatDate?.(value) ?? '';
      // case 'name':
      // case 'surname':
      // case 'family':
      //   return value; // same string value
      case 'actions':
        return <RowContextMenu />;
      default: return value;
    }
  };

  return <TableCell key={column.property} align={column.align}>
    {cellValue()}
  </TableCell>;
}

