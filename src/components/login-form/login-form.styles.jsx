import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  error: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
