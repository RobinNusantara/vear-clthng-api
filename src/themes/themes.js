import {createMuiTheme} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';
import blue from '@material-ui/core/colors/blue';

const boxShadow = `
  rgba(17, 17, 26, 0.1) 0px 8px 24px, 
  rgba(17, 17, 26, 0.1) 0px 16px 56px,
  rgba(17, 17, 26, 0.1) 0px 24px 80px
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
      light: blue[700],
    },
    secondary: {
      main: blueGrey[700],
      light: grey[200],
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
  boxShadow: boxShadow,
});

export default theme;
