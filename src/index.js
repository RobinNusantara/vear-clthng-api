import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './themes/themes';
import AuthProvider from './providers/auth-provider';
import App from './components/app/app.component';

ReactDOM.render(
    <AuthProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Router>
      </MuiThemeProvider>
    </AuthProvider>
    , document.getElementById('root'),
);

