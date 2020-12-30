import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  textHeader: {
    fontWeight: 'bold',
  },
  buttonHeader: {
    'textTransform': 'capitalize',
    'color': theme.palette.error.main,
    'backgroundColor': theme.palette.error.light,
    '&:hover': {
      backgroundColor: theme.palette.error.light,
    },
  },
}));

export default useStyles;
