import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  textHeader: {
    fontWeight: 'bold',
  },
}));

export default useStyles;
