import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(6),
  },
  paper: {
    width: 320,
  },
  textHeader: {
    marginBottom: theme.spacing(2),
  },
  textSpacing: {
    marginBottom: theme.spacing(1),
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  line: {
    height: '2px',
    width: '100%',
    borderWidth: 0,
    backgroundColor: theme.palette.secondary.main,
  },
  dividerText: {
    fontWeight: 'bold',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: theme.palette.secondary.main,
  },
  button: {
    marginBottom: theme.spacing(2),
  },
  textFooter: {
    textAlign: 'center',
  },
}));

export default useStyles;
