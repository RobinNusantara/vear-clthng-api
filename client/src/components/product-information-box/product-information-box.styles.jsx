import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: 160,
  },
  productIconContainer: {
    position: 'absolute',
    top: 0,
    left: 20,
    height: 80,
    width: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInfoContainer: {
    position: 'absolute',
    bottom: 0,
    height: 140,
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `linear-gradient(315deg, ${theme.palette.primary.main} 0%, #414141 74%)`,
  },
}));

export default useStyles;
