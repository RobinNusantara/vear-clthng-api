import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
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
import CounterButton from '../../components/counter-button/counter-button.component';
import useStyles from './custom-table.styles';

function Counter(currentLocation, document) {
  if (currentLocation.pathname.match('/favorites')) return null;
  return (<CounterButton document={document}/>);
}

function CustomTable({collection, removeDocument}) {
  const classes = useStyles();
  const location = useLocation();

  const uid = useSelector((state) => state.firebase.auth.uid);

  return (
    <Fragment>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.resetCell}>
                <Typography variant="subtitle1">PRODUCT</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle1">DESCRIPTION</Typography>
              </TableCell>
              <TableCell className={classes.productPrice} align="left">
                <Typography variant="subtitle1">PRICE</Typography>
              </TableCell>
              <TableCell className={classes.resetCell} align="right">
                <Typography variant="subtitle1">ACTION</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              collection.map((document, idx) => (
                <TableRow key={idx}>
                  <TableCell className={classes.resetCell} align="left">
                    <div
                      className={classes.productImage}
                      style={{backgroundImage: `url(${document.productImageUrl})`}}/>
                  </TableCell>
                  <TableCell className={classes.productDescription} align="left">
                    <Typography className={classes.productName} variant="subtitle1">
                      {document.productName.toUpperCase()}
                    </Typography>
                    <Typography className={classes.productColor} variant="subtitle1">
                      {document.productColor.toUpperCase()}
                    </Typography>
                    <Typography className={classes.descriptionPrice} variant="subtitle1">
                      {formatPrice(document.productPrice)}
                    </Typography>
                    <div className={classes.counterButton}>
                      {Counter(location, document)}
                    </div>
                  </TableCell>
                  <TableCell className={classes.productPrice} align="left">
                    {formatPrice(document.productPrice)}
                  </TableCell>
                  <TableCell className={classes.resetCell} align="right">
                    <IconButton onClick={(event) => {
                      event.preventDefault();
                      removeDocument(uid, document.id);
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

export default CustomTable;
