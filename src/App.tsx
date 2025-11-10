import { useEffect, useState } from 'react';
import './App.css';
import { useRegisterMutation, type UserFragment } from './../graphql/generated';
import { ApolloError } from '@apollo/client';
import ApplicationBar from './components/private/ApplicationBar';
// import CarServiceLanding from './components/public/LandingPage';
// import UsersListExample from './components/private/users/UsersListExample';
import UsersList from './components/private/users/UsersList';
import VehiclesList from './components/private/vehicles/VehiclesList';
// import UsersList from './components/private/users/UsersList';

function App() {
  // const [isParentVisible, setIsParentVisible] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userAdded, setUser] = useState({} as UserFragment);
  // const [isServerOffline, setIsServerOffline] = useState(false);
// console.log(userAdded,isServerOffline)
  // const { data, loading, error } = useLoginQuery({ variables: { email: 'pesho', password: 'pesho' } });
  // console.log(data, loading, error);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mutate] = useRegisterMutation({  });

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
    //     setIsServerOffline(true);
    //   }
    // });
    // console.log(data, loading, error ); 
  }, []);

  return (
    <>
      <ApplicationBar />
      {/* <CarServiceLanding/> */}
      <UsersList/>
      {/* <VehiclesList/> */}

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
