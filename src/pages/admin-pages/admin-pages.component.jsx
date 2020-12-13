import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';

function AdminPage() {
  return (
    <Fragment>
      <Switch>
        <Route path="/admin" component={AdminLogin}/>
      </Switch>
    </Fragment>
  );
}

function AdminLogin() {
  return (
    <Fragment><span>Login Admin</span></Fragment>
  );
}

export default AdminPage;
