import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    position: 'relative',
    height: 200,
    marginLeft: theme.spacing(3),
    borderRadius: theme.spacing(1),
    borderStyle: 'dashed',
    borderColor: theme.palette.success.main,
    backgroundColor: theme.palette.success.light,
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  inputAction: {
    width: '65%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputIcon: {
    fontSize: 48,
    color: theme.palette.success.main,
  },
  inputTextTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: theme.spacing(1),
    color: theme.palette.success.main,
  },
  inputTextSubtitle: {
    marginTop: theme.spacing(1),
    textAlign: 'center',
  },
  previewContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(3),
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
}));

export default useStyles;
