import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from '../navbar/navbar.component';
import HomePage from '../../pages/home-page/home-page.component';
import Collections from '../../pages/collections/collections.component';
import FavoritesPage from '../../pages/favorites-page/favorites-page.component';
import CartPage from '../../pages/cart-page/cart-page.component';
import SignInPage from '../../pages/signin-page/signin-page.component';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/collections" component={Collections}/>
        <Route path="/favorites" component={FavoritesPage}/>
        <Route path="/cart" component={CartPage}/>
        <Route path="/signin" component={SignInPage}/>
      </Switch>
    </Fragment>
  );
}

export default App;
