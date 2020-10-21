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
  },
});

export default theme;
