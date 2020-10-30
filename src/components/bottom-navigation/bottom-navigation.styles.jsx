import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'fixed',
    display: 'none',
    bottom: 0,
    zIndex: 1,
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
