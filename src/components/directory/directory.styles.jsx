import {makeStyles} from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

const useStyles = makeStyles((theme) => ({
  root: {
    height: (props) => props.mdScreen,
    position: 'relative',
    border: `2px solid ${blueGrey[700]}`,
    backgroundColor: theme.palette.common.black,
    cursor: 'pointer',
    overflow: 'hidden',
  },
  image: {
    'height': '100%',
    'width': '100%',
    'backgroundImage': (props) => `url(${props.imageUrl})`,
    'backgroundPosition': 'center',
    'backgroundSize': 'cover',
    'opacity': 0.6,
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)',
    },
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: theme.spacing(2),
    border: '2px solid black',
    textAlign: 'center',
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white,
    opacity: 0.7,
  },
  textHeader: {
    fontWeight: 'bold',
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      height: (props) => props.smScreen,
    },
  },
}));

export default useStyles;
