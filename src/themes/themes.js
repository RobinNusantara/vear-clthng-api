import {unstable_createMuiStrictModeTheme as createMuiTheme} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: blueGrey[700],
      light: blueGrey[50],
    },
    error: {
      main: red[700],
      light: red[100],
    },
    success: {
      main: green[700],
      light: green[50],
    },
    text: {
      secondary: blueGrey[700],
    },
  },
  typography: {
    fontFamily: 'Montserrat',
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
  overrides: {
    MuiTabs: {
      indicator: {
        height: 0,
      },
    },
    MuiTab: {
      root: {
        'textTransform': 'capitalize',
        'marginRight': 8,
        'marginLeft': 8,
        'borderRadius': 4,
        'backgroundColor': blueGrey[50],
        '&$selected': {
          color: 'white',
          backgroundColor: grey[900],
        },
      },
    },
  },
});

export default theme;
