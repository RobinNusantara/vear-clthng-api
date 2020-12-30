import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    borderRadius: 4,
    backgroundColor: theme.palette.secondary.light,
  },
  icon: {
    width: 18,
    height: 18,
  },
  counter: {
    textAlign: 'center',
    width: theme.spacing(3),
  },
}));

export default useStyles;
