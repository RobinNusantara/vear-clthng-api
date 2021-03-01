import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import useStyles from './product-information-box.styles';

function ProductInformationBox({...props}) {
  const classes = useStyles();
  const {icon} = props;

  return (
    <Fragment>
      <Grid item xs={12} sm ={6} md={3}>
        <div className={classes.root}>
          <Paper className={classes.productInfoContainer}>
          </Paper>
          <Paper className={classes.productIconContainer} elevation={3}>
            <img src={icon} alt="t-shirt-icon" width="40" height="40"/>
          </Paper>
        </div>
      </Grid>
    </Fragment>
  );
}

export default ProductInformationBox;
