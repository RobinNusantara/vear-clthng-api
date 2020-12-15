import React, {Fragment, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {productsSelector} from '../../utils/products-selectors';
import {fetchProducts} from '../../actions/products.action';
import {formatPrice} from '../../utils/utils';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function AdminDashboard() {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <Container>
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Product Price</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.productName}</TableCell>
                      <TableCell>{formatPrice(product.productPrice)}</TableCell>
                      <TableCell align="center">
                        <Box display="flex" justifyContent="space-evenly">
                          <IconButton>
                            <EditIcon/>
                          </IconButton>
                          <IconButton>
                            <DeleteIcon/>
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </Fragment>
  );
}

export default AdminDashboard;
