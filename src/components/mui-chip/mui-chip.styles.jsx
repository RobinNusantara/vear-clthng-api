import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.spacing(0.5),
    backgroundColor: theme.palette.secondary.light,
    marginRight: (props) => props.margin,
  },
}));

export default useStyles;
