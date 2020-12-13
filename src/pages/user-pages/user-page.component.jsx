import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from '../../components/navbar/navbar.component';
import NavigationBottom from '../../components/bottom-navigation/bottom-navigation.component';
import PrivateRoute from '../../routes/private-routes';
import ShopPage from '../shop-page/shop-page.component';
import Collections from '../collections/collections.component';
import FavoritesPage from '../favorites-page/favorites-page.component';
import CartPage from '../cart-page/cart-page.component';
import SignInPage from '../signin-page/signin-page.component';
import SignUpPage from '../signup-page/signup-page.component';
import ProfilePage from '../profile-page/profile-page.component';

function UserPage() {
  return (
    <Fragment>
      <Navbar/>
      <NavigationBottom/>
      <Switch>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/favorites" component={FavoritesPage}/>
        <Route path="/collections/:id" component={Collections}/>
        <Route path="/cart" component={CartPage}/>
        <Route path="/signin" component={SignInPage}/>
        <Route path="/signup" component={SignUpPage}/>
        <PrivateRoute path="/user">
          <ProfilePage/>
        </PrivateRoute>
      </Switch>
    </Fragment>
  );
};

export default UserPage;
