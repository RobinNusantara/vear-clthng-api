import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
