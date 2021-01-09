import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(12),
    },
  },
  tabs: {
    height: 50,
    marginTop: theme.spacing(2),
  },
  tab: {
    fontSize: 14,
    marginLeft: 0,
    color: theme.palette.secondary.main,
  },
  grid: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
