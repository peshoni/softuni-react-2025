import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router';
import { type UserFragment } from './../graphql/generated';
import { PathSegments } from './routes/enums';
import CarServiceLanding from './components/public/LandingPage';
import LoginForm from './components/public/LoginForm';
import RegisterForm from './components/public/RegisterFrom';
import AuthGuard from './routes/guards/AuthGuard';
import { buildUrl } from './routes/routes-util';
import { useUserContext } from './components/private/contexts/UserContext';

export interface LoggedUserMenu {
  label: string;
  path: string;
  icon: React.JSX.Element;
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, userMenu, routes, onLogin } = useUserContext();
  useEffect(() => {
    const customerAsString = localStorage.getItem('customer');
    let user: UserFragment | undefined = undefined;
    if (customerAsString) {
      user = JSON.parse(customerAsString);
      if (user) {
        onLogin(user); // Will be redirected in update below
      } else {
        navigate(buildUrl());
      }
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
    } else {
      navigate(buildUrl());

    }
  }, [user]); // will be executed only when user state changes. First call is from initial state of use which is undefined 

  return (
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
  );
}
export default App;

