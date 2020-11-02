import React, {Fragment, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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
  const [isMouseInside, setIsMouseInside] = useState(false);

  const mouseEnter = () => setIsMouseInside(true);

  const mouseLeave = () => setIsMouseInside(false);

  return (
    <Fragment>
      <Grid item xs={6} md={4} lg={3}>
        <div className={classes.root}>
          <div
            className={classes.cardHeader}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}>
            <div className={classes.cardImage}></div>
            {
              isMouseInside ?
              <Fragment>
                <div className={classes.favoriteButton}>
                  <div className={classes.iconContainer}>
                    <IconButton>
                      <Icon className={classes.icon} icon={outlineFavoriteBorder}/>
                    </IconButton>
                  </div>
                </div>
                <div className={classes.cartButton}>
                  <CustomButton
                    width="100%"
                    variant="contained"
                    color="primary">add to cart</CustomButton>
                </div>
              </Fragment> : null
            }
            <Box display={{xs: 'block', md: 'none'}}>
              <div className={classes.favoriteButton}>
                <div className={classes.iconContainer}>
                  <IconButton>
                    <Icon className={classes.icon} icon={outlineFavoriteBorder}/>
                  </IconButton>
                </div>
              </div>
            </Box>
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
