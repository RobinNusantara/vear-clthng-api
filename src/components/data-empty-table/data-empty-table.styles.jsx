import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  figure: {
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: theme.spacing(2),
  },
  description: {
    textTransform: 'uppercase',
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
