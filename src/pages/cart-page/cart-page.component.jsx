import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import {useRemoveData} from '../../hooks/user.hook';
import {totalPrice, formatPrice} from '../../utils/utils';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {Icon} from '@iconify/react';
import trashOutline from '@iconify/icons-eva/trash-outline';
import PageWrapper from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import CustomTable from '../../components/custom-table/custom-table.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Spinner from '../../components/spinner/spinner.component';
import EmptyCartIllustration from '../../assets/images/empty-cart.svg';
import useStyles from './cart-page.styles';

function CartPage() {
  const classes = useStyles();
  const uid = useSelector((state) => state.firebase.auth.uid);

  const cartPath = `users/${uid}/cart`;
  useFirestoreConnect(() => [{collection: cartPath}]);
  const cart = useSelector((state) => state.firestore.ordered[cartPath]);

  const [remove, setRemove] = useRemoveData({uid, collection: 'cart'});

  return (
    <Fragment>
      <Container>
        <PageWrapper>
          {
            !cart ? <Spinner/> :
            cart.length === 0 ?
            <div className={classes.empty}>
              <img src={EmptyCartIllustration} alt="empty-cart"/>
              <Typography className={classes.textHeader} variant="h6">YOUR CART IS EMPTY</Typography>
              <Typography className={classes.textSubtitle} variant="subtitle1">
                LOOKS LIKE YOU HAVEN&apos;T MADE YOUR CHOICES YET
              </Typography>
            </div> :
            <Fragment>
              <Header
                collection={cart}
                uid={uid}
                textHeader="CART"
                iconButton={
                  <Icon
                    height={24}
                    width={24}
                    icon={trashOutline}/>
                }/>
              <CustomTable
                collection={cart}
                remove={remove}
                setRemove={setRemove}/>
              <div className={classes.content}>
                <Typography className={classes.totalCount} variant="subtitle1">
                  {'TOTAL ' + formatPrice(totalPrice(cart, 'productPrice'))}</Typography>
                <div className={classes.button}>
                  <CustomButton
                    width={180}
                    smScreen="100%"
                    variant="contained"
                    color="primary">CHECKOUT</CustomButton>
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
