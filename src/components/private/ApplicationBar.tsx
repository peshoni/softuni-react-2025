import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { type AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import CommuteIcon from '@mui/icons-material/Commute';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import UserContextMenu from './UserContextMenu';
import { Outlet, useNavigate } from 'react-router';
import { useLoginQuery } from '../../../graphql/generated';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(1),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginTop: '64px',
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  //todo  remove this..
  boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,// 'green',
  boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export default function ApplicationBar() {
  const navigate = useNavigate();
  // mariyaivaneva@autoservice.bg UserPass!
  // ivanastanska@autoservice.bg Mechanic!
  // raykokirilin@autoservice.bg Service123!

  const user = useLoginQuery({ variables: { email: 'mariyaivaneva@autoservice.bg', password: 'UserPass!' } }).data?.users[0];
  console.log(user);
  // const [authenticatedUser, setAuthenticatedUser] = React.useState<UserFragment | undefined>(user);

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuClick = (value: string) => {
    navigate('/' + value);
    // return <Navigate to={value}/>
  };

  const menuItems = [
    { label: 'Users', icon: <GroupIcon />, path: 'users' },
    { label: 'Vehicles', icon: <CommuteIcon />, path: 'vehicles' },
    { label: 'Repair requests', icon: <CarRepairIcon />, path: 'repair-requests' },
  ];
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              { mr: 2, },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div" width={'100%'} textAlign={'start'}>
            Автосервиз
          </Typography>

          {/* The context menu for an authorized user */}

          {user && <UserContextMenu  {...user} />}

        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} color='default'
            sx={[
              { color: theme.palette.common.white },
            ]}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <List>
          {menuItems.map((menu) => (
            <ListItem key={menu.label} disablePadding>
              <ListItemButton onClick={() => handleMenuClick(menu.path)}>
                <ListItemIcon >
                  {menu.icon}
                </ListItemIcon>
                <ListItemText primary={menu.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>

        <Outlet />

      </Main>
    </Box>
  );
}