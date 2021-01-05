import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    display: 'none',
    zIndex: 2000,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
  },
  label: {
    textTransform: 'capitalize',
  },
  icon: {
    height: 24,
    width: 24,
  },
}));

export default useStyles;
