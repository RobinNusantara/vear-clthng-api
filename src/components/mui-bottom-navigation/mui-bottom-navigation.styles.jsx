import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    display: 'none',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
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
