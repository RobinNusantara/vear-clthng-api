import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
  input: {
    fontSize: 14,
  },
  icon: {
    fontSize: 14,
  },
}));

export default useStyles;
