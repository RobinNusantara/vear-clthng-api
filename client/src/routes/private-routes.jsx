import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {authUserSelector} from '../utils/auth-selectors';

function PrivateRoute({children, ...rest}) {
  const user = useSelector(authUserSelector);

  const destination = (location) => {
    return {pathname: '/signin', state: {from: location}};
  };

  return (
    <Route
      {...rest}
      render={({location}) => user ? (children) : <Redirect to={destination(location)}/>}/>
  );
}

export default PrivateRoute;
