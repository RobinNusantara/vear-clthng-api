import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  backdrop: {
    height: 320,
    backgroundColor: theme.palette.secondary.light,
  },
  content: {
    position: 'absolute',
    top: 0,
    left: '0%',
    right: '0%',
  },
  paper: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(12),
    },
  },
  menuItem: {
    textTransform: 'capitalize',
  },
  previewContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: theme.spacing(2),
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  buttonContainer: {
    borderTop: `1px solid ${theme.palette.secondary.light}`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export default useStyles;
