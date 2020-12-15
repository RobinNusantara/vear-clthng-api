import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import AdminDashboard from '../admin-dashboard/admin-dashboard.component';
import InsertProductPage from '../insert-product-page/insert-product-page.component';

function AdminPage() {
  return (
    <Fragment>
      <Switch>
        <Route path="/admin/product/insert" component={InsertProductPage} />
        <Route path="/admin/dashboard" component={AdminDashboard}/>
      </Switch>
    </Fragment>
  );
}

export default AdminPage;
