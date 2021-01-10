import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 340,
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
    },
  },
}));

export default useStyles;
