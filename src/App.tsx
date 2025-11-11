import { useEffect, useState } from 'react';
import './App.css';
import { useRegisterMutation, type UserFragment } from './../graphql/generated';
import { ApolloError } from '@apollo/client';
import ApplicationBar from './components/private/ApplicationBar';
// import CarServiceLanding from './components/public/LandingPage';
// import UsersListExample from './components/private/users/UsersListExample';
import UsersList from './components/private/users/UsersList';
import VehiclesList from './components/private/vehicles/VehiclesList';
import RepairRequestsList from './components/private/repair-requests/RepairRequestsList';
import RepairRequestDetails from './components/private/repair-requests/RepairRequestDetails';
// import UsersList from './components/private/users/UsersList';

import { Routes, Route } from 'react-router';
import UserDetails from './components/private/users/UserDetails';
import VehicleDetails from './components/private/vehicles/VehicleDetails';

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
    <>
      <ApplicationBar />
      
      <Routes> 
        {/* https://reactrouter.com/home */}
        <Route path='/' element={<div>Home Page</div>} />
        <Route path='/users' element={<UsersList />} />
        <Route path='/users/:id' element={<UserDetails />} />
        <Route path='/vehicles' element={<VehiclesList />} />
        <Route path='/vehicles/:id' element={<VehicleDetails />} />
        <Route path='/repair-requests' element={<RepairRequestsList />} />

        <Route path='/repair-requests/:id' element={<RepairRequestDetails />} />
        <Route path='*' element={<div>404 Not Found</div>} />


      </Routes>
      {/* <ApplicationBar /> */}
      {/* <CarServiceLanding/> */}
      {/* <UsersList /> */}
      {/* <RepairRequestDetails /> */}
      {/* <VehiclesList/> */}
      {/* <RepairRequestsList /> */}


      {/* <h1>hello world</h1>
      <button onClick={() => setIsParentVisible((curr) => !curr)}>toggle</button>
      {isParentVisible
        ? <Parent />
        : <section>Disabled</section>
      } */}
    </>
  );
}

export default App;
