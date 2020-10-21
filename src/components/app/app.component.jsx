import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from '../navbar/navbar.component';
import SignInPage from '../../pages/signin-page/signin-page.component';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Switch>
        <Route path='/signin' component={SignInPage}/>
      </Switch>
    </Fragment>
  );
}

export default App;
