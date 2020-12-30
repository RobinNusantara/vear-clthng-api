import {withStyles} from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';

export const StyledListItemText = withStyles((theme) => ({
  root: {
    textTransform: 'uppercase',
    fontSize: 14,
    [theme.breakpoints.down('sm')]: {
      root: {
        fontSize: 12,
      },
    },
  },
}))(ListItemText);
