import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from '../navbar/navbar.component';
import NavigationBottom from '../bottom-navigation/bottom-navigation.component';
import HomePage from '../../pages/home-page/home-page.component';
import Collections from '../../pages/collections/collections.component';
import FavoritesPage from '../../pages/favorites-page/favorites-page.component';
import CartPage from '../../pages/cart-page/cart-page.component';
import SignInPage from '../../pages/signin-page/signin-page.component';
import SignUpPage from '../../pages/signup-page/signup-page.component';
import PrivateRoute from '../../routes/private-routes';
import UserPage from '../../pages/user-page/user-page.component';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <NavigationBottom/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/favorites" component={FavoritesPage}/>
        <Route path="/collections/:id" component={Collections}/>
        <Route path="/cart" component={CartPage}/>
        <Route path="/signin" component={SignInPage}/>
        <Route path="/signup" component={SignUpPage}/>
        <PrivateRoute path="/user" component={UserPage}/>
      </Switch>
    </Fragment>
  );
}

export default App;
