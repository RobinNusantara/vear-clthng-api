import React, {Fragment, useState} from 'react';
import {useSelector} from 'react-redux';
import {usePostData} from '../../hooks/user.hook';
import {formatPrice} from '../../utils/utils';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Icon} from '@iconify/react';
import outlineFavoriteBorder from '@iconify/icons-ic/baseline-favorite-border';
import plusOutline from '@iconify/icons-eva/plus-outline';
import useStyles from './card-item.styles';

function CardItem({...props}) {
  const {productPrice} = props;
  const classes = useStyles(props);
  const [isMouseInside, setIsMouseInside] = useState(false);

  const data = {
    'productName': props.productName,
    'productLabel': props.productLabel,
    'productImageUrl': props.productImageUrl,
    'productColor': props.productColor,
    'productSize': props.productSize,
    'productPrice': props.productPrice,
  };

  const uid = useSelector((state) => state.firebase.auth.uid);
  const [cart, setCart] = usePostData({uid, collection: 'cart', payload: data});
  const [wishlist, setWishlist] = usePostData({uid, collection: 'wishlist', payload: data});

  const mouseEnter = () => setIsMouseInside(true);

  const mouseLeave = () => setIsMouseInside(false);

  return (
    <Fragment>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div
          className={classes.root}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}>
          <div className={classes.image}/>
          {
            isMouseInside ? Buttons(classes, setWishlist, setCart) : null
          }
          <Box display={{xs: 'block', sm: 'none'}}>
            {Buttons(classes, cart, setWishlist, wishlist, setCart)}
          </Box>
          <div className={classes.priceContainer}>
            <Typography
              className={classes.textPrice}
              variant="subtitle1">{formatPrice(productPrice)}</Typography>
          </div>
        </div>
      </Grid>
    </Fragment>
  );
};

function Buttons(classes, setWishlist, setCart) {
  return (
    <div className={classes.buttons}>
      <div className={classes.buttonContainer}>
        <IconButton onClick={(event) => {
          event.preventDefault();
          setWishlist();
        }}>
          <Icon className={classes.icon} icon={outlineFavoriteBorder}/>
        </IconButton>
      </div>
      <div className={`${classes.buttonContainer} ${classes.cartContainer}`}>
        <IconButton onClick={(event) => {
          event.preventDefault();
          setCart();
        }}>
          <Icon className={classes.icon} icon={plusOutline}/>
        </IconButton>
      </div>
    </div>
  );
}

export default CardItem;
