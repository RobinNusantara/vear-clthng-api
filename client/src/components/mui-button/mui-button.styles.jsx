import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: (props) => props.height,
    width: (props) => props.width,
    fontSize: 14,
    textTransform: 'capitalize',
    borderRadius: 4,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: (props) => props._width,
    },
  },
}));

export default useStyles;
