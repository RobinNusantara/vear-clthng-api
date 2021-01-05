import React, {Fragment, useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {authUserSelector} from '../../utils/auth-selectors';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Typography from '@material-ui/core/Typography';
import {Icon} from '@iconify/react';
import homeOption from '@iconify/icons-grommet-icons/home-option';
import outlineFavoriteBorder from '@iconify/icons-ic/baseline-favorite-border';
import outlineShoppingBag from '@iconify/icons-ic/outline-shopping-bag';
import bxUser from '@iconify/icons-bx/bx-user';
import useStyles from './mui-bottom-navigation.styles';

function MuiBottomNavigation() {
  const classes = useStyles();
  const location = useLocation();
  const user = useSelector(authUserSelector);
  const [value, setValue] = useState(0);

  const navigations = [
    {
      value: 0,
      label: 'home',
      icon: homeOption,
      route: '/shop',
    },
    {
      value: 1,
      label: 'favorites',
      icon: outlineFavoriteBorder,
      route: '/favorites',
    },
    {
      value: 2,
      label: 'cart',
      icon: outlineShoppingBag,
      route: '/cart',
    },
    {
      value: 3,
      label: 'account',
      icon: bxUser,
      route: user ? '/user' : '/signin',
    },
  ];

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/shop':
        setValue(0);
        break;
      case '/favorites':
        setValue(1);
        break;
      case '/cart':
        setValue(2);
        break;
      case '/signup':
      case '/signin':
      case '/user':
        setValue(3);
        break;
      default:
        break;
    };
  }, [location]);

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Fragment>
      <BottomNavigation className={classes.root} value={value} onChange={handleChange}>
        {
          navigations.map((nav, idx) => (
            <BottomNavigationAction
              key={idx}
              value={nav.value}
              label={
                <Typography className={classes.label} variant="subtitle2">
                  {nav.label}
                </Typography>
              }
              icon={<Icon className={classes.icon} icon={nav.icon}/>}
              to={nav.route}
              component={Link}/>
          ))
        }
      </BottomNavigation>
    </Fragment>
  );
};

export default MuiBottomNavigation;
