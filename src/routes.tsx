import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Home from './Home';
import { Login } from './Login';

const PrivateRoute = ({ element: Component, ...rest }: any) => {
  const isLoggedIn = localStorage.getItem('gh-dev-token') !== null;

  return (
    <Route
      {...rest}
      render={(props: any) =>
        isLoggedIn ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <PrivateRoute path="/" element={Home} />
        <Route path="/login" element={Login} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
