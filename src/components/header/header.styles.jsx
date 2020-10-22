import {makeStyles} from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 140,
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
  leftBox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textHeader: {
    fontWeight: 'bold',
  },
  textSubtitle: {
    marginTop: theme.spacing(2),
    color: blueGrey[700],
  },
  rightBox: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      height: 120,
    },
  },
}));

export default useStyles;
