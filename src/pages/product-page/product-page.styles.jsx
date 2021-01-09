import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(12),
    },
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
  textCapitalize: {
    textTransform: 'capitalize',
  },
  topSpacing: {
    marginTop: theme.spacing(1),
  },
  desktop: {

  },
  mobile: {
    display: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    mobile: {
      display: 'flex',
      flexDirection: 'column',
    },
    mobileHeader: {
      flex: 1,
      width: '100%',
    },
    imageContainer: {
      height: 420,
      [theme.breakpoints.down('xs')]: {
        height: 320,
      },
    },
    image: {
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    mobileContent: {
      flex: 1,
      width: '100%',
      marginTop: theme.spacing(4),
    },
    _buttons: {
      marginTop: theme.spacing(2),
    },
    _button: {
      marginTop: theme.spacing(2),
    },
  },
}));

export default useStyles;
