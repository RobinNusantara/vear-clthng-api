import {unstable_createMuiStrictModeTheme as createMuiTheme} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: blueGrey[700],
      light: blueGrey[50],
    },
    text: {
      secondary: blueGrey[700],
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h5: {
      fontSize: 20,
    },
    h6: {
      'fontSize': 16,
      '@media screen and (max-width: 600px)': {
        fontSize: 14,
      },
    },
    subtitle1: {
      'fontSize': 14,
      '@media screen and (max-width: 600px)': {
        fontSize: 12,
      },
    },
    subtitle2: {
      fontSize: 12,
    },
  },
  boxShadow: {
    primary: `rgba(17, 17, 26, 0.1) 0px 8px 24px, 
              rgba(17, 17, 26, 0.1) 0px 16px 56px,
              rgba(17, 17, 26, 0.1) 0px 24px 80px`,
    secondary: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  },
  breakpoints: {
    xxs: '@media screen and (max-width: 360px)',
  },
});

export default theme;
