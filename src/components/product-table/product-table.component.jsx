import React, {Fragment, useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {productsSelector, productsFetching} from '../../utils/products-selectors';
import {fetchProducts} from '../../actions/products.action';
import {formatPrice} from '../../utils/utils';
import Spinner from '../../components/spinner/spinner.component';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import useStyles from './product-table.styles';

function ProductTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const isFetching = useSelector(productsFetching);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Fragment>
      {
          !isFetching ? <Spinner/> :
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <Typography variant="subtitle1">ID</Typography>
                  </TableCell>
                  <TableCell colSpan={2}>
                    <Typography variant="subtitle1">Product</Typography>
                  </TableCell>
                  <TableCell className={classes.cellXlDevice}>
                    <Typography variant="subtitle1">Brand</Typography>
                  </TableCell>
                  <TableCell className={classes.cellXlDevice}>
                    <Typography variant="subtitle1">Category</Typography>
                  </TableCell>
                  <TableCell className={classes.cellXlDevice}>
                    <Typography variant="subtitle1">Price</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell align="center">{product.id}</TableCell>
                      <TableCell>
                        <img
                          className={classes.productImage}
                          src={`http://localhost:4000/images/${product.images[0].productImage}`}
                          alt="product-preview"/>
                      </TableCell>
                      <TableCell>
                        <Link
                          variant="subtitle1"
                          underline="none"
                          to={`product/details/${product.id}`}
                          component={RouterLink}>
                          {product.productName}
                        </Link>
                        <Typography
                          className={`
                          ${classes.cellSmDevice}
                          ${classes.productCategory}
                          ${classes.descriptionSpace}`}
                          variant="subtitle1">
                          {product.productCategory}
                        </Typography>
                        <Typography
                          className={`${classes.cellSmDevice} ${classes.descriptionSpace}`}
                          variant="subtitle1">
                          {formatPrice(product.productPrice)}
                        </Typography>
                      </TableCell>
                      <TableCell className={classes.cellXlDevice}>
                        <Typography variant="subtitle1">{product.productBrand}</Typography>
                      </TableCell>
                      <TableCell className={classes.cellXlDevice}>
                        <Typography className={classes.productCategory} variant="subtitle1">
                          {product.productCategory}
                        </Typography>
                      </TableCell>
                      <TableCell className={classes.cellXlDevice}>
                        <Typography variant="subtitle1">{formatPrice(product.productPrice)}</Typography>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
      }
    </Fragment>
  );
}

export default ProductTable;
