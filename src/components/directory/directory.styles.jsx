import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: (props) => props.mdScreen,
    position: 'relative',
    border: `2px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.primary.main,
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
    border: `2px solid ${theme.palette.secondary.main}`,
    textAlign: 'center',
    color: theme.palette.secondary.main,
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
