import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './themes/themes';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {createFirestoreInstance} from 'redux-firestore';
import firebase from './config/firebase';
import App from './components/app/app.component';

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
        <React.StrictMode>
          <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
              <App/>
            </ReactReduxFirebaseProvider>
          </Provider>
        </React.StrictMode>
      </Router>
    </MuiThemeProvider>
    , document.getElementById('root'),
);

