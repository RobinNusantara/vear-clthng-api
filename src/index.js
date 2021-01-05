import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './themes/themes';
import App from './components/app/app.component';
import configureStore, {history} from './store/store';

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
              <App/>
            </ConnectedRouter>
          </PersistGate>
        </Provider>
      </React.StrictMode>
    </MuiThemeProvider>
    , document.getElementById('root'),
);

