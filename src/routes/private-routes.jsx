import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({children, ...rest}) {
  return (
    <Route
      {...rest}
      render={({location}) =>
        isLoaded(auth) && !isEmpty(auth) ? (children) :
        (<Redirect
          to={{
            pathname: '/signin',
            state: {from: location},
          }}/>)
      }/>
  );
}

export default PrivateRoute;
