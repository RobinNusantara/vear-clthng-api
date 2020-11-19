import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(12),
    },
  },
  mobileDeviceHeader: {
    display: 'none',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  searchContainer: {
    position: 'relative',
    height: 50,
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light,
  },
  searchInput: {
    height: '100%',
    width: '100%',
    fontSize: 14,
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(2),
  },
  searchIcon: {
    position: 'absolute',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: theme.spacing(2),
  },
  icon: {
    color: theme.palette.primary.main,
    width: 20,
    height: 20,
  },
}));

export default useStyles;
