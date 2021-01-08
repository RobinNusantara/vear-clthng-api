import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  section: {
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderBottom: `2px solid ${theme.palette.common.white}`,
  },
  text: {
    color: theme.palette.common.white,
  },
}));

export default useStyles;
