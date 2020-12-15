import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    display: 'none',
    boxShadow: theme.boxShadow.primary,
    zIndex: 2000,
  },
  icon: {
    height: 24,
    width: 24,
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      display: 'flex',
    },
  },
}));

export default useStyles;
