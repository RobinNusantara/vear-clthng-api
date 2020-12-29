import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  resetCell: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  productImage: {
    width: 100,
    height: 130,
    border: ` 1px solid ${theme.palette.secondary.main}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  productName: {
    fontWeight: 'bold',
  },
  productPrice: {
    display: 'none',
  },
  tableDataSpacing: {
    marginTop: theme.spacing(1),
  },
  icon: {
    color: theme.palette.secondary.main,
  },
  [theme.breakpoints.down('sm')]: {
    productPrice: {
      display: 'block',
    },
    _textOverflow: {
      minWidth: 180,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    tableDataHidden: {
      display: 'none',
    },
  },
  [theme.breakpoints.down('xs')]: {
    _textOverflow: {
      width: 140,
    },
  },
}));

export default useStyles;
