import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import trashOutline from '@iconify/icons-eva/trash-outline';
import PageWrapper from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import {Icon} from '@iconify/react';
import CustomTable from '../../components/custom-table/custom-table.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import useStyles from './cart-page.styles';
import { Typography } from '@material-ui/core';

function CartPage() {
  const classes = useStyles();
  return (
    <Fragment>
      <Container>
        <PageWrapper>
          <Header
            textHeader="CART"
            textSubtitle={4}
            iconButton={
              <Icon
                height={24}
                width={24}
                icon={trashOutline}/>
            }/>
          <CustomTable/>
          <div className={classes.content}>
            <Typography variant="subtitle1">Rp 2.660.000,00</Typography>
            <div className={classes.button}>
              <CustomButton
                width={180}
                smScreen="100%"
                variant="contained"
                color="primary">CHECKOUT</CustomButton>
            </div>
          </div>
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

export default CartPage;
