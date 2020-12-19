import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  menuButton: {
    color: theme.palette.common.white,
  },
  backButton: {
    color: theme.palette.common.white,
  },
  logoLight: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default useStyles;
