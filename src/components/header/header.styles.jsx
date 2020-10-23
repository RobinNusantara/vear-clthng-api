import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 140,
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
  leftBox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textHeader: {
    fontWeight: 'bold',
  },
  textSubtitle: {
    marginTop: theme.spacing(2),
  },
  rightBox: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    color: theme.palette.secondary.main,
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      height: 120,
      marginBottom: theme.spacing(0),
    },
  },
}));

export default useStyles;
