import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import PageWrapper from '../../components/container/container.component';
import Header from '../../components/header/header.component';

function FavoritesPage() {
  return (
    <Fragment>
      <Container>
        <PageWrapper>
          <Header textHeader="FAVORITE" textSubtitle={3}/>
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

export default FavoritesPage;
