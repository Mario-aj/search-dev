import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './Home';
import { Login } from './Login';

const PrivateRoute = () => {
  const isLoggedIn = localStorage.getItem('gh-dev-token') !== null;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
