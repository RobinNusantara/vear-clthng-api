import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuthContext} from '../providers/auth-provider';

function PrivateRoute({component: Component, ...props}) {
  const {currentUser} = useAuthContext();
  return (
    <Route
      {...props}
      render={(rest) => {
        return currentUser ? <Component {...props}/> : <Redirect to="/signin"/>;
      }}/>
  );
}

export default PrivateRoute;
