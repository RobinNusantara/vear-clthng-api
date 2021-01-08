import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: 80,
    borderRadius: theme.spacing(0.5),
    backgroundColor: theme.palette.secondary.light,
  },
  value: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  quantityButton: {
    padding: theme.spacing(0.5),
  },
  icon: {
    color: theme.palette.secondary.main,
  },
}));

export default useStyles;
