import {makeStyles} from '@material-ui/core/styles';
const background = 'https://i.ibb.co/7K3cMjF/photo-1485230895905-ec40ba36b9bc.jpg';

const useStyles = makeStyles((theme) => ({
  firstSection: {
    position: 'relative',
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
  },
  background: {
    'height': '100%',
    'width': '100%',
    'backgroundImage': `url(${background})`,
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'backgroundPosition': 'center',
    'opacity': 0.2,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.common.white,
  },
  title: {
    textAlign: 'center',
    marginTop: theme.spacing(1),
  },
  button: {
    'width': 200,
    'textAlign': 'center',
    'border': `1px solid ${theme.palette.common.white}`,
    'padding': theme.spacing(1.5),
    'marginTop': theme.spacing(2),
    'cursor': 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  link: {
    fontWeight: 'bold',
    color: theme.palette.common.white,
  },
}));

export default useStyles;
