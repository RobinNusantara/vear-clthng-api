import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.spacing(0.5),
    marginRight: (props) => props.margin,
    backgroundColor: (props) => props.backdrop,
    color: (props) => props.color,
  },
}));

export default useStyles;
