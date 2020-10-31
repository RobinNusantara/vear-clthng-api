import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    position: 'relative',
    height: 400,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 6,
    overflow: 'hidden',
  },
  cardImage: {
    height: '100%',
    width: '100%',
    backgroundImage: (props) => `url(${props.productImageUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  favoriteButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  iconContainer: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
  },
  icon: {
    color: theme.palette.common.white,
  },
  cartButton: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: theme.spacing(2),
  },
  textHeader: {
    fontWeight: 'bold',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  textSubtitle: {
    textAlign: 'right',
    fontWeight: 'bold',
    paddingTop: theme.spacing(1),
  },
}));

export default useStyles;
