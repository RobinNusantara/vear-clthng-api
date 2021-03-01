import React, {Fragment} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import MuiNavbar from '../mui-navbar/mui-navbar.component';
import MuiBottomNavigation from '../mui-bottom-navigation/mui-bottom-navigation.component';
import UserPrivateRoute from '../../routes/user-private-routes';
import ShopPage from '../../pages/shop-page/shop-page.component';
import ProductsPage from '../../pages/products-page/products-page.component';
import ProductPage from '../../pages/product-page/product-page.component';
import FavoritesPage from '../../pages/favorites-page/favorites-page.component';
import CartPage from '../../pages/cart-page/cart-page.component';
import SignInPage from '../../pages/signin-page/signin-page.component';
import SignUpPage from '../../pages/signup-page/signup-page.component';
import ProfilePage from '../../pages/profile-page/profile-page.component';
import AdminNavbar from '../../admin/admin-navbar.component';
import AdminSignIn from '../../admin/admin-signin/admin-signin-page.component';
import ProductDashboard from '../../admin/product-dashboard/product-dashboard-page.component';
import ProductInsert from '../../admin/product-insert/product-insert-page.component';

function App() {
  const location = useLocation();

  return (
    <Fragment>
      {location.pathname.match('/admin') ? null : <MuiNavbar/>}
      {!location.pathname.match('/admin') || location.pathname.match('admin/signin') ? null : <AdminNavbar/>}
      {location.pathname.match('/admin') ? null : <MuiBottomNavigation/>}
      <Switch>
        <Route exact path="/" component={ShopPage}/>
        <Route path="/favorites" component={FavoritesPage}/>
        <Route path="/collections/:category" render={() => <ProductsPage/>}/>
        <Route path="/product/details/:id" render={() => <ProductPage/>}/>
        <Route path="/cart" component={CartPage}/>
        <Route path="/signin" component={SignInPage}/>
        <Route path="/signup" component={SignUpPage}/>
        <UserPrivateRoute path="/user">
          <ProfilePage/>
        </UserPrivateRoute>
        <Route path="/admin/signin" component={AdminSignIn}/>
        <Route path="/admin/product/dashboard" component={ProductDashboard}/>
        <Route path="/admin/product/insert" component={ProductInsert}/>
      </Switch>
    </Fragment>
  );
}

export default App;
