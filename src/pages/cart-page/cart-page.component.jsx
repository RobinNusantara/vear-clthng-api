import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import trashOutline from '@iconify/icons-eva/trash-outline';
import PageWrapper from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import {Icon} from '@iconify/react';
import CustomTable from '../../components/custom-table/custom-table.component';

function CartPage() {
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
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

export default CartPage;
