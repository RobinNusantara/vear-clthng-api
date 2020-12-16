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
}));

export default useStyles;
