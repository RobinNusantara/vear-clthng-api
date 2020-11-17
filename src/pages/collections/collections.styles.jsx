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
      display: 'flex',
    },
  },
  searchContainer: {
    flex: 5,
    position: 'relative',
    height: 50,
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    boxShadow: theme.boxShadow.primary,
    [theme.breakpoints.xxs]: {
      flex: 4,
    },
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
  filterContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    boxShadow: theme.boxShadow.primary,
  },
  icon: {
    color: theme.palette.primary.main,
    width: 20,
    height: 20,
  },
}));

export default useStyles;
