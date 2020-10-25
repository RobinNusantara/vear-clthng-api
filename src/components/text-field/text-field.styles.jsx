import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(4),
  },
  label: {
    marginBottom: theme.spacing(1),
    textTransform: 'capitalize',
  },
  input: {
    fontSize: 14,
  },
  [theme.breakpoints.down('sm')]: {
    input: {
      fontSize: 12,
    },
  },
}));

export default useStyles;
