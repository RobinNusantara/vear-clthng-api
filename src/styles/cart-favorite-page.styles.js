import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    height: 140,
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      height: 120,
    },
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
  content: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'right',
    marginTop: theme.spacing(2),
  },
  totalCount: {
    fontWeight: 'bold',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
