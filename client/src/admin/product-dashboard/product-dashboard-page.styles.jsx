import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(12),
    },
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  insertIconButton: {
    display: 'none',
    borderRadius: theme.spacing(0.5),
    marginLeft: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  addIcon: {
    color: theme.palette.common.white,
  },
}));

export default useStyles;
