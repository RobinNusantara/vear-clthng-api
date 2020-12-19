import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
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
import useStyles from './admin-dashboard.styles';

function AdminDashboard() {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

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
              className={classes.smallButton}
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
            <Tab {...a11yProps(0)} label={<Typography variant="subtitle1">t-shirts</Typography>}/>
            <Tab {...a11yProps(1)} label={<Typography variant="subtitle1">pants</Typography>}/>
            <Tab {...a11yProps(2)} label={<Typography variant="subtitle1">hijab</Typography>}/>
            <Tab {...a11yProps(3)} label={<Typography variant="subtitle1">jackets</Typography>}/>
            <Tab {...a11yProps(4)} label={<Typography variant="subtitle1">sneakers</Typography>}/>
          </Tabs>
          <TabPanel value={value} index={0}>
            <span>T-Shirts</span>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <span>Pants</span>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <span>Hijab</span>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <span>Jackets</span>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <ProductTable/>
          </TabPanel>
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
