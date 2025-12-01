import './App.css';
import { useEffect, useState, useMemo, type JSX } from 'react';
import { type RoleFragment, type UserFragment } from './../graphql/generated';
import CustomersList from './components/private/users/CustomersList';
import VehiclesList from './components/private/vehicles/VehiclesList';
import RepairRequestsList from './components/private/repair-requests/RepairRequestsList';
import RepairRequestDetails from './components/private/repair-requests/RepairRequestDetails';
import { Routes, Route, useNavigate, useLocation } from 'react-router';
import CustomerDetails from './components/private/users/CustomerDetails';
import VehicleDetails from './components/private/vehicles/VehicleDetails';
import { PathSegments } from './routes/enums';
import CarServiceLanding from './components/public/LandingPage';
import LoginForm from './components/public/LoginForm';
import RegisterForm from './components/public/RegisterFrom';
import AuthGuard from './routes/guards/AuthGuard';
import GroupIcon from '@mui/icons-material/Group';
import CommuteIcon from '@mui/icons-material/Commute';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import { buildUrl } from './routes/routes-util';
import UserContext, { type UserContextProps } from './components/private/contexts/UserContext';

export interface LoggedUserMenu {
  label: string;
  icon: React.JSX.Element;
  path: string;
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  //#region User context properties
  const [user, setUser] = useState<UserFragment | undefined>(undefined);
  const [userMenu, setUserMenu] = useState<LoggedUserMenu[]>([]);
  const [routes, setRoutes] = useState<{ path: string, element: JSX.Element; }[]>([]);

  const loginHandler = (user: UserFragment) => {
    setUser(user);
    const role: RoleFragment = user.user_role;
    const allowedPaths: LoggedUserMenu[] = buildMenuAccordingRole(role);
    setRoutes(buildRoutesAccordingToRole(role));
    setUserMenu(allowedPaths);

    localStorage.setItem('customer', JSON.stringify(user));
    console.log('User saved in localStorage from App.tsx');
    console.log(user);
  };

  const logoutHandler = () => {
    setUser(undefined);
  };
  console.log(Object.keys(localStorage));
  // TODO : Read more about hooks: https://react.dev/reference/react/useMemo 
  const userContextValue: UserContextProps = useMemo(() => ({
    user,
    userMenu,
    onLogin: loginHandler,
    onLogout: logoutHandler,
  }), [user]);
  //#endregion User context properties

  useEffect(() => {
    const customerAsString = localStorage.getItem('customer');
    let user: UserFragment | undefined = undefined;
    if (customerAsString) {
      user = JSON.parse(customerAsString);
      if (user) {
        loginHandler(user);
      } else {
        navigate(buildUrl());
      }
    } else {
      navigate(buildUrl());
    }

  }, []);

  useEffect(() => {
    if (user) {
      const desiredPath = location.pathname.replace('/', ''); // remove first slash
      const deepLink = userMenu.find(m => m.path.startsWith(desiredPath)); // on page refresh or URL manually adding

      if (desiredPath.length === 0) {
        navigate(buildUrl(userMenu[0].path));
      } else if (deepLink) {
        navigate(buildUrl(deepLink.path));
      } else {
        navigate(buildUrl(desiredPath));
      }
    }
  }, [user]);

  const buildMenuAccordingRole = (role: RoleFragment): LoggedUserMenu[] => {
    const customers: LoggedUserMenu = { label: 'Customers', icon: <GroupIcon />, path: PathSegments.CUSTOMERS };
    const vehicles: LoggedUserMenu = { label: 'Vehicles', icon: <CommuteIcon />, path: PathSegments.VEHICLES };
    const repairRequests: LoggedUserMenu = { label: 'Repair requests', icon: <CarRepairIcon />, path: PathSegments.REPAIR_REQUESTS };

    switch (role.code) {
      case 'customer':
        return [vehicles, repairRequests];
      case 'serviceSpecialist':
        return [customers, vehicles, repairRequests];
      case 'autoMechanic':
        return [repairRequests];
      default:
        return [];
    }
  };

  const buildRoutesAccordingToRole = (role: RoleFragment) => {
    const routes: { path: string, element: JSX.Element; }[] = [];

    const customersList = { path: PathSegments.CUSTOMERS, element: <CustomersList /> };
    const customerDetails = { path: buildUrl(PathSegments.CUSTOMERS, PathSegments.DETAILS, ':id'), element: <CustomerDetails /> };
    const vehiclesList = { path: PathSegments.VEHICLES, element: <VehiclesList /> };
    const vehicleDetails = { path: buildUrl(PathSegments.VEHICLES, PathSegments.DETAILS, ':id'), element: <VehicleDetails /> };
    const repairRequestsList = { path: PathSegments.REPAIR_REQUESTS, element: <RepairRequestsList /> };
    const repairRequestDetails = { path: buildUrl(PathSegments.REPAIR_REQUESTS, PathSegments.DETAILS, ':id'), element: <RepairRequestDetails /> };

    switch (role.code) {
      case 'customer':
        return [vehiclesList, vehicleDetails, repairRequestsList, repairRequestDetails];
      case 'serviceSpecialist':
        return [customersList, customerDetails, vehiclesList, vehicleDetails, repairRequestsList, repairRequestDetails];
      case 'autoMechanic':
        return [vehiclesList, vehicleDetails, repairRequestsList, repairRequestDetails];
      default:
        return routes;
    }
  };


  return (
    <UserContext.Provider value={userContextValue}>
      <Routes>
        {/* Public area */}
        <Route path='/' element={<CarServiceLanding />} />
        <Route path={PathSegments.LOGIN} element={<LoginForm />} />
        <Route path={PathSegments.REGISTER} element={<RegisterForm />} />

        {/* Private area */}

        <Route element={<AuthGuard user={user} menu={userMenu} />}>
          {/* Add paths according to role */}
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route path='*' element={<div style={{ width: '100vw', height: '100vh', alignContent: 'center' }}>
          <h2>404 Not Found</h2> </div>} />
      </Routes>
    </UserContext.Provider>
  );
}



export default App;

