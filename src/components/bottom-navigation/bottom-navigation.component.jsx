import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Typography from '@material-ui/core/Typography';
import {Icon} from '@iconify/react';
import bxUser from '@iconify/icons-bx/bx-user';
import bxCompass from '@iconify/icons-bx/bx-compass';
import outlineFavoriteBorder from '@iconify/icons-ic/baseline-favorite-border';
import outlineShoppingBag from '@iconify/icons-ic/outline-shopping-bag';
import useStyles from './bottom-navigation.styles';

function NavigationBottom() {
  const classes = useStyles();
  const [value, setValue] = useState('explore');

  useEffect(() => {

  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <BottomNavigation
        className={classes.root}
        value={value}
        onChange={handleChange}>
        <BottomNavigationAction
          label={<Typography variant="subtitle2">EXPLORE</Typography>}
          value="explore"
          icon={<Icon className={classes.icon} icon={bxCompass}/>}
          to="/collections"
          component={Link}/>
        <BottomNavigationAction
          label={<Typography variant="subtitle2">FAVORITES</Typography>}
          value="favorites"
          icon={<Icon className={classes.icon} icon={outlineFavoriteBorder}/>}
          to="/favorites"
          component={Link}/>
        <BottomNavigationAction
          label={<Typography variant="subtitle2">CART</Typography>}
          value="cart"
          icon={<Icon className={classes.icon} icon={outlineShoppingBag}/>}
          to="/cart"
          component={Link}/>
        <BottomNavigationAction
          label={<Typography variant="subtitle2">ACCOUNT</Typography>}
          value="user"
          icon={<Icon className={classes.icon} icon={bxUser}/>}
          to="/signin"
          component={Link}/>
      </BottomNavigation>
    </Fragment>
  );
};

export default NavigationBottom;
