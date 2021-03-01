import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: 180,
    width: '100%',
    border: `2px solid ${theme.palette.success.main}`,
    borderStyle: 'dashed',
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.success.light,
    cursor: 'pointer',
  },
  imageContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  imageButton: {
    width: 18,
    height: 18,
  },
  imageIcon: {
    color: theme.palette.success.main,
  },
  imageText: {
    fontWeight: 'bold',
    marginTop: theme.spacing(1),
    color: theme.palette.success.main,
  },
}));

export default useStyles;
