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
    marginTop: theme.spacing(2),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  description: {
    marginTop: theme.spacing(2),
    textTransform: 'uppercase',
  },
}));

export default useStyles;
