import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  resetCell: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  icon: {
    color: theme.palette.secondary.main,
  },
  tableDataSpacing: {
    marginTop: theme.spacing(1),
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
  [theme.breakpoints.down('sm')]: {
    tableDataHidden: {
      display: 'none',
    },
    productPrice: {
      display: 'block',
    },
  },
  [theme.breakpoints.down('xs')]: {
    _textOverflow: {
      maxWidth: 180,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    productImage: {
      width: 90,
      height: 120,
    },
  },
}));

export default useStyles;
