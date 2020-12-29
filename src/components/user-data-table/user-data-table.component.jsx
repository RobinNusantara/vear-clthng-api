import React, {Fragment} from 'react';
import {useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {formatPrice} from '../../utils/utils';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import {Icon} from '@iconify/react';
import closeOutline from '@iconify/icons-eva/close-outline';
import CounterQuantity from '../counter-quantity/counter-quantity.component';
import useStyles from './user-data-table.styles';

function UserDataTable({items, removeItem}) {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_VEAR_CLOTHING_URL;

  return (
    <Fragment>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.resetCell}>
                <Typography variant="subtitle1">Product</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle1">Description</Typography>
              </TableCell>
              <TableCell className={classes.tableDataHidden} align="left">
                <Typography variant="subtitle1">Price</Typography>
              </TableCell>
              <TableCell className={classes.resetCell} align="right">
                <Typography variant="subtitle1">Action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className={classes.resetCell} align="left">
                    <div
                      className={classes.productImage}
                      style={{backgroundImage: `url(${url}/images/${item.collection.images[0].productImage})`}}/>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={`${classes.productName} ${classes._textOverflow}`} variant="subtitle1">
                      {item.collection.productName}
                    </Typography>
                    <Typography className={`${classes._textOverflow} ${classes.tableDataSpacing}`} variant="subtitle1">
                      {item.collection.productColor}
                    </Typography>
                    <Typography className={`${classes.productPrice} ${classes.tableDataSpacing}`} variant="subtitle1">
                      {formatPrice(item.collection.productPrice)}
                    </Typography>
                    <div className={classes.tableDataSpacing}>
                      {location.pathname.match('/favorites') ? null : <CounterQuantity item={item}/>}
                    </div>
                  </TableCell>
                  <TableCell className={classes.tableDataHidden} align="left">
                    {formatPrice(item.collection.productPrice)}
                  </TableCell>
                  <TableCell className={classes.resetCell} align="right">
                    <IconButton onClick={(e) => {
                      e.preventDefault();
                      dispatch(removeItem(item.id));
                    }}>
                      <Icon
                        className={classes.icon}
                        height={24}
                        width={24}
                        icon={closeOutline}/>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default UserDataTable;
