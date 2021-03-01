import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 50,
  },
  searchContainer: {
    height: '100%',
    position: 'relative',
    borderRadius: theme.spacing(0.5),
    backgroundColor: theme.palette.secondary.light,
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
}));

export default useStyles;
