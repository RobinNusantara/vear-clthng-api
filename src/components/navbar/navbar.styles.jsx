import {makeStyles} from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    textDecoration: 'none',
    borderBottom: `2px solid ${blueGrey[900]}`,
  },
  logo: {
    fontWeight: 'bold',
  },
  menus: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menu: {
    color: blueGrey[900],
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      backgroundColor: theme.palette.common.black,
    },
    toolbar: {
      borderBottom: 'none',
      justifyContent: 'center',
    },
    logo: {
      color: theme.palette.common.white,
    },
    menus: {
      display: 'none',
    },
  },
}));

export default useStyles;
