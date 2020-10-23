import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    height: 340,
    border: `2px solid ${theme.palette.secondary.main}`,
  },
  cardFooter: {
  },
  textHeader: {
    fontWeight: 'bold',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  divider: {
    border: `1px solid ${theme.palette.secondary.main}`,
  },
  textSubtitle: {
    textAlign: 'right',
    paddingTop: theme.spacing(1),
  },
  [theme.breakpoints.down('sm')]: {
    cardHeader: {
      height: 260,
    },
    textHeader: {
      fontSize: 12,
    },
    textSubtitle: {
      fontSize: 12,
    },
  },
}));

export default useStyles;
