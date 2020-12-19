import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(2),
  },
  searchContainer: {
    position: 'relative',
    borderRadius: theme.spacing(0.5),
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light,
    [theme.breakpoints.down('sm')]: {
      flex: 5,
    },
  },
  searchInput: {
    height: '100%',
    width: 180,
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
  smallButton: {
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  iconButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      'display': 'block',
      'borderRadius': theme.spacing(0.5),
      'color': theme.palette.secondary.light,
      'backgroundColor': theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  tabs: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
