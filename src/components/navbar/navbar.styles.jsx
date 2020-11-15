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
  logoDark: {
    display: 'block',
  },
  logoLight: {
    display: 'none',
  },
  menus: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: 24,
    width: 24,
    color: theme.palette.secondary.main,
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      backgroundColor: theme.palette.primary.main,
    },
    toolbar: {
      borderBottom: 'none',
      justifyContent: 'center',
    },
    logoDark: {
      display: 'none',
    },
    logoLight: {
      display: 'block',
    },
    menus: {
      display: 'none',
    },
  },
}));

export default useStyles;
