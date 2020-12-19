import {makeStyles, withStyles} from '@material-ui/core/styles';
import MuiTableCell from '@material-ui/core/TableCell';

export const TableCell = withStyles({
  root: {
    borderBottom: 'none',
  },
})(MuiTableCell);

const useStyles = makeStyles((theme) => ({
  productImage: {
    width: 80,
    height: 80,
  },
  productCategory: {
    textTransform: 'capitalize',
  },
  descriptionSpace: {
    marginTop: theme.spacing(1),
  },
  cellSmDevice: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  cellXlDevice: {
    display: 'table-cell',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default useStyles;
