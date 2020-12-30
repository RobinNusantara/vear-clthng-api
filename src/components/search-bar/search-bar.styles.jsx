import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
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
    borderRadius: theme.spacing(0.5),
    backgroundColor: theme.palette.secondary.light,
    [theme.breakpoints.xxs]: {
      flex: 4,
    },
  },
  searchContainerInput: {
    height: '100%',
    width: '100%',
    fontSize: 14,
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(2),
  },
  searchContainerIcon: {
    position: 'absolute',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: theme.spacing(2),
  },
  searchIcon: {
    width: 20,
    height: 20,
    color: theme.palette.secondary.main,
  },
  filterContainerIcon: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: theme.spacing(2),
    borderRadius: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.main,
  },
  filterIcon: {
    width: 20,
    height: 20,
    color: theme.palette.secondary.light,
  },
}));

export default useStyles;
