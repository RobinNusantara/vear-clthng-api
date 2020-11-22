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
    height: 50,
    display: 'none',
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
  },
  searchContainer: {
    flex: 5,
    position: 'relative',
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light,
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
  icon: {
    color: theme.palette.secondary.main,
    width: 20,
    height: 20,
  },
  filterContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: theme.spacing(1),
    marginLeft: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light,
  },
  tabs: {
    height: 50,
    marginTop: theme.spacing(2),
  },
  tab: {
    fontSize: 14,
    color: theme.palette.secondary.main,
    [theme.breakpoints.xxs]: {
      fontSize: 12,
    },
  },
  grid: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
