import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(12),
    },
  },
  textBold: {
    fontWeight: 'bold',
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
    buttons: {
      position: 'fixed',
      bottom: 20,
      width: '100%',
    },
    actions: {
      display: 'flex',
    },
    paper: {
      width: 80,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.spacing(0.5),
      backgroundColor: theme.palette.common.white,
    },
    favoriteButton: {
      height: '100%',
      width: '100%',
      border: `2px solid ${theme.palette.primary.main}`,
      borderRadius: theme.spacing(0.5),
    },
    favoriteIcon: {
      color: theme.palette.primary.main,
    },
    cartButton: {
      height: 56,
      width: '100%',
      textTransform: 'capitalize',
      marginLeft: theme.spacing(2),
    },
  },
}));

export default useStyles;
