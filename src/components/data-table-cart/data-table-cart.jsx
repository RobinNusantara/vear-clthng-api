import React, {Fragment, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeItemFromCart} from '../../actions/carts.action';
import {bagsFetchSelector} from '../../utils/carts-selector';
import {formatPrice} from '../../utils/utils';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MuiSnackbar from '../mui-snackbar/mui-snackbar.component';
import MuiCounter from '../mui-counter/mui-counter.component';
import {Icon} from '@iconify/react';
import closeOutline from '@iconify/icons-eva/close-outline';
import useStyles from '../../styles/data-table.styles';

function DataTableCart() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const carts = useSelector(bagsFetchSelector);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <Fragment>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.resetCell}>
                <Typography variant="body2">Product</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="body2">Description</Typography>
              </TableCell>
              <TableCell className={classes.tableDataHidden} align="left">
                <Typography variant="body2">Price</Typography>
              </TableCell>
              <TableCell className={classes.resetCell} align="right">
                <Typography variant="body2">Action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              carts.map((cart) => {
                const {productName, productColor, productPrice, images} = cart.collection;

                const handleClick = () => {
                  setOpen(true);
                  dispatch(removeItemFromCart(cart.id));
                };

                return (
                  <TableRow key={cart.id}>
                    <TableCell className={classes.resetCell} align="left">
                      <img className={classes.productImage} src={images[0].productImage} alt={productName}/>
                    </TableCell>
                    <TableCell align="left">
                      <Typography className={`${classes.productName} ${classes._textOverflow}`} variant="subtitle1">
                        {productName}
                      </Typography>
                      <Typography className={`${classes._textOverflow} ${classes.tableDataSpacing}`} variant="subtitle1">
                        {productColor}
                      </Typography>
                      <Typography className={`${classes.productPrice} ${classes.tableDataSpacing}`} variant="subtitle1">
                        {formatPrice(productPrice)}
                      </Typography>
                      <MuiCounter initialValue={cart.productQuantity}/>
                    </TableCell>
                    <TableCell className={classes.tableDataHidden} align="left">
                      {formatPrice(productPrice)}
                    </TableCell>
                    <TableCell className={classes.resetCell} align="right">
                      <IconButton onClick={handleClick}>
                        <Icon className={classes.icon} icon={closeOutline}/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
      <MuiSnackbar open={open} handleClose={handleClose} severity="success">
        Product removed from cart!
      </MuiSnackbar>
    </Fragment>
  );
};

export default DataTableCart;
