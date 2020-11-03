import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(6),
  },
  header: {
    height: 120,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    marginBottom: theme.spacing(6),
  },
  textHeader: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      marginBottom: theme.spacing(12),
    },
    header: {
      height: 80,
      marginBottom: theme.spacing(4),
    },
  },
}));

export default useStyles;
