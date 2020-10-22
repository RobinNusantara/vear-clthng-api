import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  },
}));

export default useStyles;
