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

export const env = {
  client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
  client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
  redirect_uri: process.env.REACT_APP_GITHUB_REDIRECT_URI,
};

const PrivateRoute = () => {
  const isLoggedIn = localStorage.getItem('gh-dev-access_token');
  console.log(isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
