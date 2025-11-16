import { useEffect } from 'react';
import './App.css';
import { useLoginQuery, useRegisterMutation } from './../graphql/generated';
import UsersList from './components/private/users/UsersList';
import VehiclesList from './components/private/vehicles/VehiclesList';
import RepairRequestsList from './components/private/repair-requests/RepairRequestsList';
import RepairRequestDetails from './components/private/repair-requests/RepairRequestDetails';
import { Routes, Route, useNavigate } from 'react-router';
import UserDetails from './components/private/users/UserDetails';
import VehicleDetails from './components/private/vehicles/VehicleDetails';
import { PathSegments } from './routes/enums';
import CarServiceLanding from './components/public/LandingPage';
import LoginForm from './components/public/LoginForm';
import RegisterForm from './components/public/RegisterFrom';
import AuthGuard from './routes/guards/AuthGuard';

function App() { 
    const navigate = useNavigate();
  // const [isParentVisible, setIsParentVisible] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [loggedUser, setUser] = useState({} as UserFragment);
  // const [isServerOffline, setIsServerOffline] = useState(false);
  // console.log(userAdded,isServerOffline)
  // const { data, loading, error } = useLoginQuery({ variables: { email: 'pesho', password: 'pesho' } });
  // console.log(data, loading, error);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mutate] = useRegisterMutation({});


  const testUSers = [
    { email: 'mariyaivaneva@autoservice.bg', password: 'UserPass!' },
    { email: 'ivanastanska@autoservice.bg', password: 'Mechanic!' },
    { email: 'raykokirilin@autoservice.bg', password: 'Service123!' },
  ]
  // mariyaivaneva@autoservice.bg UserPass!
  // ivanastanska@autoservice.bg Mechanic!
  // raykokirilin@autoservice.bg Service123!
  let user = useLoginQuery({ variables: testUSers[2] }).data?.users[0];
  console.log(user);

  useEffect(() => {
    console.log('MOUNT...');
    console.log(user);
    if (user) {
      //TODO determine menus and navigate to first available;
        navigate('/vehicles');

    }

  }, [user]);

  return (
    <Routes>

      {/* <Route element={<PublicLayout />}> */}
        <Route index element={<CarServiceLanding />} />
        <Route path={PathSegments.LOGIN} element={<LoginForm />} />
        <Route path={PathSegments.REGISTER} element={<RegisterForm />} />
      {/* </Route> */}

      <Route element={<AuthGuard user={user} />}>
        <Route path={PathSegments.USERS} element={<UsersList />} />
        <Route path={PathSegments.USERS + '/' + PathSegments.DETAILS + '/:id'} element={<UserDetails />} />

        <Route path={PathSegments.VEHICLES} element={<VehiclesList />} />
        <Route path={PathSegments.VEHICLES + '/' + PathSegments.DETAILS + '/:id'} element={<VehicleDetails />} />

        <Route path={PathSegments.REPAIR_REQUESTS} element={<RepairRequestsList />} />
        <Route path={PathSegments.REPAIR_REQUESTS + '/' + PathSegments.DETAILS + '/:id'} element={<RepairRequestDetails />} />
      </Route>

      <Route path='*' element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
