import {makeStyles} from '@material-ui/core/styles';
import Wave from '../../assets/images/wave.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  wave: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 400,
    backgroundImage: `url(${Wave})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  },
  boxes: {
    width: '100%',
    display: 'flex',
  },
  leftBox: {
    flex: 1,
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  imageContainer: {
    height: 550,
    position: 'relative',
  },
  imageLeft: {
    position: 'absolute',
    right: 0,
    height: 480,
    width: 240,
    border: `2px solid ${theme.palette.secondary.main}`,
    backgroundColor: '#9BA4B4',
  },
  imageRight: {
    position: 'absolute',
    bottom: 0,
    height: 480,
    width: 240,
    border: `2px solid ${theme.palette.secondary.main}`,
    backgroundColor: '#F1F6F9',
  },
  imageCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 480,
    width: 240,
    border: `2px solid ${theme.palette.secondary.main}`,
    backgroundColor: '#394867',
  },
  rightBox: {
    flex: 1,
    width: '100%',
  },
  formBox: {
    height: 550,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      height: 480,
    },
  },
}));

export default useStyles;
