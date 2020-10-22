import React, {Fragment, useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Typography from '@material-ui/core/Typography';
import {Icon} from '@iconify/react';
import NavigationData from '../../data/navigation-data';
import useStyles from './bottom-navigation.styles';

function NavigationBottom() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/':
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
        setValue(3);
        break;
      default:
        break;
    };
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <BottomNavigation
        className={classes.root}
        value={value}
        onChange={handleChange}>
        {
          NavigationData.map((nav, idx) => (
            <BottomNavigationAction
              key={idx}
              value={nav.value}
              label={<Typography variant="subtitle2">{nav.label}</Typography>}
              icon={<Icon className={classes.icon} icon={nav.icon}/>}
              to={nav.route}
              component={Link}/>
          ))
        }
      </BottomNavigation>
    </Fragment>
  );
};

export default NavigationBottom;
