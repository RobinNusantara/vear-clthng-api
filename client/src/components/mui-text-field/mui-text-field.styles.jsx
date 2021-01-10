import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  label: {
    fontSize: 14,
    marginBottom: theme.spacing(1),
    textTransform: 'capitalize',
  },
  input: {
    fontSize: 14,
  },
  error: {
    fontSize: 14,
    color: theme.palette.error.main,
  },
  [theme.breakpoints.down('sm')]: {
    label: {
      fontSize: 12,
    },
    error: {
      fontSize: 12,
    },
  },
}));

export default useStyles;
