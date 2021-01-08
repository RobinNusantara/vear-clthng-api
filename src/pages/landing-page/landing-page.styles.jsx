import {makeStyles} from '@material-ui/core/styles';
const background = 'https://i.ibb.co/7K3cMjF/photo-1485230895905-ec40ba36b9bc.jpg';
const _background = 'https://i.ibb.co/pRLkDpF/charles-deluvio-4-K7-Bwa-HUGc-unsplash-1.png';

const useStyles = makeStyles((theme) => ({
  firstSection: {
    position: 'relative',
    height: '65vh',
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
  secondSection: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  directory: {
    position: 'relative',
    height: 400,
    border: `1px solid ${theme.palette.secondary.main}`,
  },
  thirdSection: {
    position: 'relative',
    height: 300,
    backgroundColor: theme.palette.primary.main,
  },
  _background: {
    'height': '100%',
    'width': '100%',
    'backgroundImage': `url(${_background})`,
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'backgroundPosition': 'center',
    'opacity': 0.5,
  },
  fourthSection: {
    height: '60vh',
  },
}));

export default useStyles;
