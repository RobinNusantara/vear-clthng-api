import {createMuiTheme} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: blueGrey[700],
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
      fontSize: 16,
    },
    subtitle1: {
      fontSize: 14,
    },
    subtitle2: {
      fontSize: 12,
    },
  },
});

export default theme;
