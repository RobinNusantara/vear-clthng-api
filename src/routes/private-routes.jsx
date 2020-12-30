import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {authUserSelector} from '../utils/auth-selectors';

function PrivateRoute({children, ...rest}) {
  const user = useSelector(authUserSelector);

  return (
    <Route
      {...rest}
      render={({location}) =>
        user ? (children) :
        (<Redirect
          to={{
            pathname: '/signin',
            state: {from: location},
          }}/>)
      }/>
  );
}

export default PrivateRoute;
