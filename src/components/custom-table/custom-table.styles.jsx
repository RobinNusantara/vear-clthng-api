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
  productColor: {
    marginTop: theme.spacing(1),
  },
  descriptionPrice: {
    display: 'none',
    marginTop: theme.spacing(1),
  },
  counterButton: {
    marginTop: theme.spacing(1),
  },
  icon: {
    color: theme.palette.secondary.main,
  },
  [theme.breakpoints.down('sm')]: {
    table: {
      width: '100%',
    },
    productName: {
      width: 180,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    productColor: {
      width: 180,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    productPrice: {
      display: 'none',
    },
    descriptionPrice: {
      display: 'block',
    },
  },
  [theme.breakpoints.down('xs')]: {
    productName: {
      width: 140,
    },
    productColor: {
      width: 140,
    },
  },
}));

export default useStyles;
