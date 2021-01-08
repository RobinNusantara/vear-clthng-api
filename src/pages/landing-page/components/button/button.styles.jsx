import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    'width': 160,
    'textAlign': 'center',
    'border': `1px solid ${theme.palette.common.white}`,
    'padding': theme.spacing(1.5),
    'cursor': 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  text: {
    fontWeight: 'bold',
    color: theme.palette.common.white,
  },
}));

export default useStyles;
