import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: (props) => props.mdScreen,
    border: `2px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.primary.main,
    cursor: 'pointer',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      height: (props) => props.smScreen,
    },
  },
  image: {
    'height': '100%',
    'width': '100%',
    'backgroundImage': (props) => `url(${props.image})`,
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
    textAlign: 'center',
    padding: theme.spacing(2),
    border: `2px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.common.white,
    opacity: 0.7,
  },
  textHeader: {
    fontWeight: 'bold',
  },
}));

export default useStyles;
