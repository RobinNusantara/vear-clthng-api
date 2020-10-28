import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    height: 360,
    border: `2px solid ${theme.palette.secondary.main}`,
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
}));

export default useStyles;
