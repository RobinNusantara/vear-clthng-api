import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundColor: 'transparent',
  },
  cardImage: {
    height: 360,
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.down('xs')]: {
      height: 220,
    },
  },
  cardActions: {
    position: 'absolute',
    top: 10,
    right: 10,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  paper: {
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  cartContainer: {
    marginTop: theme.spacing(1),
  },
  icon: {
    height: 20,
    width: 20,
    color: theme.palette.common.white,
  },
  cardContent: {
    textAlign: 'center',
    paddingLeft: 0,
    paddingRight: 0,
  },
  textHeader: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
  text: {
    width: '100%',
    marginTop: theme.spacing(0.5),
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    color: theme.palette.secondary.main,
  },
}));

export default useStyles;
