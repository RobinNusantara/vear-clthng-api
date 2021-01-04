import React, {Fragment} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import Navbar from '../../components/navbar/navbar.component';
import NavigationBottom from '../../components/bottom-navigation/bottom-navigation.component';
import PrivateRoute from '../../routes/private-routes';
import ShopPage from '../../pages/shop-page/shop-page.component';
import ProductsPage from '../../pages/products-page/products-page.component';
import ProductPage from '../../pages/product-page/product-page.component';
import FavoritesPage from '../../pages/favorites-page/favorites-page.component';
import CartPage from '../../pages/cart-page/cart-page.component';
import SignInPage from '../../pages/signin-page/signin-page.component';
import SignUpPage from '../../pages/signup-page/signup-page.component';
import ProfilePage from '../../pages/profile-page/profile-page.component';
import AdminPage from '../../pages/admin-pages/admin-pages.component';

function App() {
  const location = useLocation();

  return (
    <Fragment>
      {location.pathname.match('/admin') ? null : <Navbar/>}
      {
        location.pathname.match('/admin') ||
        location.pathname.match('/product') ? null :
        <NavigationBottom/>
      }
      <Switch>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/favorites" component={FavoritesPage}/>
        <Route path="/collections/:category" render={() => <ProductsPage/>}/>
        <Route path="/product/details/:id" render={() => <ProductPage/>}/>
        <Route path="/cart" component={CartPage}/>
        <Route path="/signin" component={SignInPage}/>
        <Route path="/signup" component={SignUpPage}/>
        <PrivateRoute path="/user">
          <ProfilePage/>
        </PrivateRoute>
      </Switch>
      <AdminPage/>
    </Fragment>
  );
}

export default App;
