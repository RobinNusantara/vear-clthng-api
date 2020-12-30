import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    display: 'none',
    boxShadow: theme.boxShadow.primary,
    zIndex: 2000,
  },
  label: {
    textTransform: 'capitalize',
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
