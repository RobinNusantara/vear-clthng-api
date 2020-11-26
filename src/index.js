import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './themes/themes';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {createFirestoreInstance} from 'redux-firestore';
import firebase from './config/firebase';
import App from './components/app/app.component';
import {ConnectedRouter} from 'connected-react-router';
import configureStore, {history} from './store/store';

const store = configureStore();

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
      <React.StrictMode>
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <ConnectedRouter history={history}>
              <App/>
            </ConnectedRouter>
          </ReactReduxFirebaseProvider>
        </Provider>
      </React.StrictMode>
    </MuiThemeProvider>
    , document.getElementById('root'),
);

