import {makeStyles} from '@material-ui/core/styles';

const boxShadow = `
  rgba(17, 17, 26, 0.1) 0px 8px 24px, 
  rgba(17, 17, 26, 0.1) 0px 16px 56px,
  rgba(17, 17, 26, 0.1) 0px 24px 80px
`;

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(6),
  },
  smallDeviceHeader: {
    display: 'none',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
  },
  searchContainer: {
    flex: 4,
    position: 'relative',
    height: 50,
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    boxShadow: boxShadow,
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
    boxShadow: boxShadow,
  },
  icon: {
    color: theme.palette.primary.main,
    width: 20,
    height: 20,
  },
  textHeader: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      marginBottom: theme.spacing(12),
    },
    header: {
      height: 80,
      marginBottom: theme.spacing(4),
    },
  },
}));

export default useStyles;
