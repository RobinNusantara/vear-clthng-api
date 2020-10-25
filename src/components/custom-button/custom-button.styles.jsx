import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: (props) => props.width,
    fontSize: 14,
    borderRadius: 4,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      width: (props) => props.smScreen,
      fontSize: 12,
    },
  },
}));

export default useStyles;
