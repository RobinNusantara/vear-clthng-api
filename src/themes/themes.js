import {createMuiTheme} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[200],
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
  },
});

export default theme;
