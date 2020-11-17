import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: 360,
    borderRadius: theme.spacing(1),
    boxShadow: theme.boxShadow,
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      height: 240,
    },
  },
  image: {
    height: '100%',
    width: '100%',
    backgroundImage: (props) => `url(${props.productImageUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  buttons: {
    position: 'absolute',
    top: 10,
    right: 10,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  buttonContainer: {
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
  priceContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
  textPrice: {
    fontWeight: 'bold',
    color: theme.palette.common.white,
  },
}));

export default useStyles;
