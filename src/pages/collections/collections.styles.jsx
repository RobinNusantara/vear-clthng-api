import {makeStyles} from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  header: {
    height: 120,
    borderBottom: `2px solid ${blueGrey[700]}`,
  },
  textHeader: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
}));

export default useStyles;
