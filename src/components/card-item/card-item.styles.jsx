import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  image: {
    height: 360,
    width: '100%',
    backgroundImage: (props) => `url(${props.productImageUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.down('xs')]: {
      height: 220,
    },
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
  text: {
    width: '100%',
    textAlign: 'center',
    color: theme.palette.secondary.main,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  topSpacing: {
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  botSpacing: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
