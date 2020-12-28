import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './themes/themes';
import App from './components/app/app.component';
import {ConnectedRouter} from 'connected-react-router';
import configureStore, {history} from './store/store';

const store = configureStore();

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <React.StrictMode>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App/>
          </ConnectedRouter>
        </Provider>
      </React.StrictMode>
    </MuiThemeProvider>
    , document.getElementById('root'),
);

