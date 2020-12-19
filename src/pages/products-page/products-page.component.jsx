import React, {Fragment, useState, useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import {fetchProducts, destroyProductsState} from '../../actions/products.action';
import {productsSelector, productsFetching} from '../../utils/products-selectors';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import PageWrapper from '../../components/container/container.component';
import Spinner from '../../components/spinner/spinner.component';
import CardItem from '../../components/card-item/card-item.component';
import {Icon} from '@iconify/react';
import searchOutline from '@iconify/icons-eva/search-outline';
import optionsOutline from '@iconify/icons-eva/options-outline';
import useStyles from './products-page.styles';

function ProductsPage({fetchProducts, destroyProducts}) {
  const classes = useStyles();
  const location = useLocation();
  const {category} = useParams();
  const [value, setValue] = useState(0);

  const products = useSelector(productsSelector);
  const isFetching = useSelector(productsFetching);

  useEffect(() => {
    fetchProducts(category);
    return () => destroyProducts();
  }, [fetchProducts, category, destroyProducts]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Container>
        <PageWrapper>
          <div className={classes.root}>
            <div className={classes.mobileDeviceHeader}>
              <div className={classes.searchContainer}>
                <div className={classes.searchIcon}>
                  <Icon className={classes.icon} icon={searchOutline}/>
                </div>
                <InputBase
                  className={classes.searchInput}
                  placeholder="Search"/>
              </div>
              <div className={classes.filterContainer}>
                <IconButton>
                  <Icon className={classes.icon} icon={optionsOutline}/>
                </IconButton>
              </div>
            </div>
            {
                  location.pathname.match('/collections/hijab') ? null :
                  <Tabs
                    className={classes.tabs}
                    value={value}
                    onChange={handleChange}>
                    <Tab className={classes.tab} label="all"/>
                    <Tab className={classes.tab} label="men"/>
                    <Tab className={classes.tab} label="women"/>
                  </Tabs>
            }
            <Grid className={classes.grid} container spacing={2}>
              {
                    isFetching ? <Spinner /> :
                    products.map((product) => <CardItem key={product.id} {...product}/>)
              }
            </Grid>
          </div>
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (params) => dispatch(fetchProducts(params)),
    destroyProducts: () => dispatch(destroyProductsState()),
  };
};

export default connect(null, mapDispatchToProps)(ProductsPage);
