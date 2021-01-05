import React, {Fragment} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import MuiNavbar from '../../components/mui-navbar/mui-navbar.component';
import MuiBottomNavigation from '../../components/mui-bottom-navigation/mui-bottom-navigation.component';
import PrivateRoute from '../../routes/private-routes';
import ShopPage from '../../pages/shop-page/shop-page.component';
import ProductsPage from '../../pages/products-page/products-page.component';
import ProductPage from '../../pages/product-page/product-page.component';
import FavoritesPage from '../../pages/favorites-page/favorites-page.component';
import CartPage from '../../pages/cart-page/cart-page.component';
import SignInPage from '../../pages/signin-page/signin-page.component';
import SignUpPage from '../../pages/signup-page/signup-page.component';
import ProfilePage from '../../pages/profile-page/profile-page.component';

function App() {
  const location = useLocation();

  return (
    <Fragment>
      <MuiNavbar/>
      {location.pathname.match('/product') ? null : <MuiBottomNavigation/>}
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
    </Fragment>
  );
}

export default App;
