import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import PageWrapper from '../../components/container/container.component';
import Header from '../../components/header/header.component';

function CartPage() {
  return (
    <Fragment>
      <Container>
        <PageWrapper>
          <Header textHeader="CART" textSubtitle={4}/>
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

export default CartPage;
