import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  empty: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  textHeader: {
    marginTop: theme.spacing(2),
    fontWeight: 'bold',
  },
  textSubtitle: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
