import React from 'react';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const user = useSelector(state => state.user);
  
  if (user) {
    return <Route>{children}</Route>
  } else {
    return <Redirect to="/login" />
  }
};

export default PrivateRoute;
