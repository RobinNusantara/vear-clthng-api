import React, {Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useHistory, useLocation} from 'react-router-dom';
import ProductTable from '../../components/product-table/product-table.component';
import {useTheme} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import {Icon} from '@iconify/react';
import searchOutline from '@iconify/icons-eva/search-outline';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import categories from '../../data/categories';
import useStyles from './admin-products-page.styles';

function AdminDashboard() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/admin/products/t-shirt':
        setValue(0);
        break;
      case '/admin/products/pants':
        setValue(1);
        break;
      case '/admin/products/hijab':
        setValue(2);
        break;
      case '/admin/products/jackets':
        setValue(3);
        break;
      case '/admin/products/sneakers':
        setValue(4);
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
      <Container className={classes.root}>
        <Paper>
          <div className={classes.header}>
            <div className={classes.searchContainer}>
              <div className={classes.searchIcon}>
                <Icon className={classes.icon} icon={searchOutline}/>
              </div>
              <InputBase
                className={classes.searchInput}
                placeholder="Search"
                inputProps={{
                  style: {color: theme.palette.secondary.main},
                }}/>
            </div>
            <Button
              className={classes.containedButton}
              variant="contained"
              color="primary"
              disableElevation={true}
              size="large"
              startIcon={<AddIcon/>}
              onClick={() => history.push('/admin/product/insert')}>
              Insert
            </Button>
            <IconButton
              className={classes.iconButton}
              onClick={() => history.push('/admin/product/insert')}>
              <AddIcon/>
            </IconButton>
          </div>
          <Tabs
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="off">
            {
              categories.map((category, idx) => (
                <Tab
                  key={idx}
                  {...a11yProps(idx)}
                  label={<Typography variant="subtitle1">{category.name}</Typography>}
                  onClick={() => history.push(`/admin/products/${category.name}`)}/>
              ))
            }
          </Tabs>
          {
            categories.map((_, idx) => (
              <TabPanel key={idx} value={value} index={idx}>
                <ProductTable/>
              </TabPanel>
            ))
          }
        </Paper>
      </Container>
    </Fragment>
  );
}

function TabPanel(props) {
  const {value, index, children, ...other} = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`products-tabpanel-${index}`}
      aria-labelledby={`products-tab-${index}`}
      {...other}>
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    'id': `products-tab-${index}`,
    'aria-controls': `products-tabpanel-${index}`,
  };
}

export default AdminDashboard;
