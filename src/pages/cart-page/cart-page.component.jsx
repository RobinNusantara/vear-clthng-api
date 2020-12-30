import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bagsFetchSelector, bagsLoadingSelector} from '../../utils/carts-selector';
import {fetchCartsItems, removeItemFromCart, destroyCartsState} from '../../actions/carts.action';
import {totalPrice, formatPrice} from '../../utils/utils';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import UserDataTable from '../../components/user-data-table/user-data-table.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Spinner from '../../components/spinner/spinner.component';
import EmptyData from '../../components/empty-data/empty-data.component';
import EmptyCartImage from '../../assets/images/empty-cart.svg';
import useStyles from './cart-page.styles';

function CartPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const carts = useSelector(bagsFetchSelector);
  const isFetching = useSelector(bagsLoadingSelector);

  useEffect(() => {
    dispatch(fetchCartsItems());
    return () => dispatch(destroyCartsState());
  }, [dispatch]);

  return (
    <Fragment>
      <Container>
        <PageWrapper>
          {
            isFetching ? <Spinner/> :
            carts.length === 0 ? <EmptyData icon={EmptyCartImage} title="cart"/> :
            <Fragment>
              <Header collection={carts} title="Cart"/>
              <UserDataTable items={carts} removeItem={removeItemFromCart}/>
              <div className={classes.content}>
                <Typography className={classes.totalCount} variant="subtitle1">
                  {'Total ' + formatPrice(totalPrice(carts))}</Typography>
                <div className={classes.button}>
                  <CustomButton
                    width={180}
                    smScreen="100%"
                    variant="contained"
                    color="primary">Checkout</CustomButton>
                </div>
              </div>
            </Fragment>
          }
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

export default CartPage;
