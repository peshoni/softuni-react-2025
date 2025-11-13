import { useEffect, useState } from 'react';
import './App.css';
import { useRegisterMutation, type UserFragment } from './../graphql/generated';
import ApplicationBar from './components/private/ApplicationBar';
import UsersList from './components/private/users/UsersList';
import VehiclesList from './components/private/vehicles/VehiclesList';
import RepairRequestsList from './components/private/repair-requests/RepairRequestsList';
import RepairRequestDetails from './components/private/repair-requests/RepairRequestDetails';
import { Routes, Route } from 'react-router';
import UserDetails from './components/private/users/UserDetails';
import VehicleDetails from './components/private/vehicles/VehicleDetails';
import { PathSegments } from './components/routes/enums';
import CarServiceLanding from './components/public/LandingPage';
import PublicLayout from './components/public/PublicLayout';
import LoginForm from './components/public/LoginForm';
import RegisterForm from './components/public/RegisterFrom';

function App() {
  // const [isParentVisible, setIsParentVisible] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userAdded, setUser] = useState({} as UserFragment);
  // const [isServerOffline, setIsServerOffline] = useState(false);
  // console.log(userAdded,isServerOffline)
  // const { data, loading, error } = useLoginQuery({ variables: { email: 'pesho', password: 'pesho' } });
  // console.log(data, loading, error);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mutate] = useRegisterMutation({});

  useEffect(() => {
    console.log('MOUNT...');
    // mutate({
    //   variables: {
    //     user: {
    //       name: 'Pepe',
    //       surname: 'Ivanov',
    //       family: 'Ivanov',
    //       gender: 'male',
    //       email: 'aaa@aaa.bg',
    //       password: 'aaaaa',
    //       role: 'customer'
    //     }
    //   }
    // }).then((res) => {
    //   setUser(res.data?.insert_users_one as UserFragment);
    //   console.log(res);
    // }).catch(e => {
    //   if (e instanceof ApolloError) {
    //     console.log(e);
    //     // setIsServerOffline(true);
    //   }
    // });
    // console.log(data, loading, error ); 
  }, []);

  return (
    <Routes>
      <Route path='/' element={<ApplicationBar />}>
        <Route path={PathSegments.USERS} element={<UsersList />} />
        <Route path={PathSegments.USERS + '/' + PathSegments.DETAILS + '/:id'} element={<UserDetails />} />

        <Route path={PathSegments.VEHICLES} element={<VehiclesList />} />
        <Route path={PathSegments.VEHICLES + '/' + PathSegments.DETAILS + '/:id'} element={<VehicleDetails />} />

        <Route path={PathSegments.REPAIR_REQUESTS} element={<RepairRequestsList />} />
        <Route path={PathSegments.VEHICLES + '/' + PathSegments.DETAILS + '/:id'} element={<RepairRequestDetails />} />
      </Route>

      <Route element={<PublicLayout />}>
        <Route path='landingPage' element={<CarServiceLanding />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='register' element={<RegisterForm />} />
      </Route>

      <Route path='*' element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
