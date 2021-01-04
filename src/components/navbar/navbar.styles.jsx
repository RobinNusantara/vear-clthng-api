import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    zIndex: 2000,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    textDecoration: 'none',
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
  backButton: {
    display: 'none',
  },
  backIcon: {
    color: theme.palette.common.white,
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
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    },
    toolbar: {
      borderBottom: 'none',
    },
    backButton: {
      display: 'block',
    },
    logoDark: {
      display: 'none',
    },
    logoLight: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'block',
    },
    menus: {
      display: 'none',
    },
  },
}));

export default useStyles;
