import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'right',
    marginTop: theme.spacing(2),
  },
  totalCount: {
    fontWeight: 'bold',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
