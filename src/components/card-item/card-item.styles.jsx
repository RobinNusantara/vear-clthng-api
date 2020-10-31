import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    position: 'relative',
    height: 400,
    border: `1px solid ${theme.palette.secondary.main}`,
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
    borderLeft: `1px solid ${theme.palette.secondary.main}`,
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.common.white,
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
    paddingTop: theme.spacing(1),
  },
}));

export default useStyles;
