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
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
  },
  textSubtitle: {
    textTransform: 'uppercase',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  line: {
    width: '100%',
    height: '2px',
    borderWidth: 0,
    backgroundColor: theme.palette.secondary.main,
  },
  dividerText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: theme.palette.secondary.main,
  },
  button: {
    marginBottom: theme.spacing(2),
  },
  textFooter: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
}));

export default useStyles;
