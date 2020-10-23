import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    textDecoration: 'none',
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
  logo: {
    fontWeight: 'bold',
  },
  menus: {
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menu: {
    color: theme.palette.secondary.main,
  },
  icon: {
    height: 24,
    width: 24,
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      backgroundColor: theme.palette.primary.main,
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
