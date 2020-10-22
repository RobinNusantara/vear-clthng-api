import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(6),
  },
  paper: {
    width: 320,
  },
  header: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
