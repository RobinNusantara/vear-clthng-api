import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import CustomButton from '../custom-button/custom-button.component';
import {Icon} from '@iconify/react';
import outlineFavoriteBorder from '@iconify/icons-ic/baseline-favorite-border';
import useStyles from './card-item.styles';

function CardItem({...props}) {
  const {productName, productPrice} = props;
  const classes = useStyles(props);
  return (
    <Fragment>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className={classes.root}>
          <div className={classes.cardHeader}>
            <div className={classes.cardImage}/>
            <div className={classes.favoriteButton}>
              <IconButton>
                <Icon icon={outlineFavoriteBorder}/>
              </IconButton>
            </div>
            <div className={classes.cartButton}>
              <CustomButton
                width="100%"
                variant="contained"
                color="primary">add to cart</CustomButton>
            </div>
          </div>
          <div className={classes.cardFooter}>
            <Typography
              className={classes.textHeader}
              variant="subtitle1">
              {productName.toUpperCase()}
            </Typography>
            <Divider color="secondary"/>
            <Typography
              className={classes.textSubtitle}
              variant="subtitle1"
              color="textSecondary">
              {new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR'}).format(productPrice)}
            </Typography>
          </div>
        </div>
      </Grid>
    </Fragment>
  );
};

export default CardItem;
