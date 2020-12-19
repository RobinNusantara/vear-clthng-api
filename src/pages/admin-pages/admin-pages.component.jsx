import React, {Fragment} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import DrawerNavigation from '../../components/drawer-navigation/drawer-navigation.component';
import AdminProductsPage from '../admin-products-page/admin-products-page.component';
import InsertProductPage from '../insert-product-page/insert-product-page.component';

function NavigationDrawer(currentLocation) {
  if (currentLocation.pathname.match('/admin')) return (<DrawerNavigation/>);
  return null;
}

function AdminPage() {
  const location = useLocation();

  return (
    <Fragment>
      {NavigationDrawer(location)}
      <Switch>
        <Route path="/admin/product/insert" component={InsertProductPage} />
        <Route path="/admin/products/:category" component={AdminProductsPage}/>
      </Switch>
    </Fragment>
  );
}

export default AdminPage;
