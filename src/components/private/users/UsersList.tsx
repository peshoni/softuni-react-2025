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
import { useGetUsersQuery } from '../../../../graphql/generated';

interface Column {
  id: 'name' | 'family' | 'actions';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'family', label: 'family', minWidth: 100 },
  // { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  // {
  //   id: 'population',
  //   label: 'Population',
  //   minWidth: 170,
  //   align: 'right',
  //   format: (value: number) => value.toLocaleString('en-US'),
  // },
  // {
  //   id: 'size',
  //   label: 'Size\u00a0(km\u00b2)',
  //   minWidth: 170,
  //   align: 'right',
  //   format: (value: number) => value.toLocaleString('en-US'),
  // },
  // {
  //   id: 'density',
  //   label: 'Density',
  //   minWidth: 170,
  //   align: 'right',
  //   format: (value: number) => value.toFixed(2),
  // },
  {
    id: 'actions',
    label: 'actions',
    minWidth: 60,
    align: 'right',
    // format: (value: number) => value.toFixed(2),
  },

];

// interface Data {
//   name: string;
//   family: string;
//   // population: number;
//   // size: number;
//   // density: number;
//   actions?: any;
// } 

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: (theme.vars ?? theme).palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));

export default function UsersList() {
  const rowsPerPageOptions = [5, 10, 15];


  //const offset: number = this.paginator.pageIndex * this.paginator.pageSize;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  let aggregatedCount: number = 0;

  const { data, loading, error } = useGetUsersQuery({ variables: { limit: rowsPerPage, offset: page * rowsPerPage, condition: {}, orderBy: { name: 'asc' } } });
  console.log(data, loading, error);

  useEffect(() => {
    console.log('data changed', data);
    aggregatedCount = data?.users_aggregate.aggregate?.count ?? 0;

  }, [data]);
  //TODo: error handling

  const handleChangePage = (event: unknown, newPage: number) => {
    console.log(event, newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(+event.target.value);
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filterSelectedHandler = (event: string) => {
    console.log('child -> parent' + event);
  };
  const addClickedHandler = () => {
    console.log('child -> parent: add click');
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
        preselectedOption=''
        options={['a', 'b']}
        addClickedHandler={addClickedHandler}
        filterSelectedHandler={filterSelectedHandler}
      ></TableNavbar>


      <TableContainer sx={{ height: '100%' }}>
        <Box sx={{ width: '100%' }}>
          {loading && <LinearProgress />}
        </Box>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {/*  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) */}
            {data?.users.map((user) => {
              return (
                <TableRow hover tabIndex={-1} key={user.id}>
                  {columns.map((column) => {
                    // console.log(row);
                    const value = (user as any)[column.id];//as keyof UserFragment
                    // console.log(value);
                    return column.id === 'actions'
                      ? (<TableCell key={column.id} align={column.align}> icons </TableCell>)
                      : (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
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
        count={aggregatedCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
