import React, {Fragment} from 'react';
import PageWrapper from '../../components/container/container.component';
import InsertProductForm from '../../components/insert-product-form/insert-product-form.component';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useStyles from './insert-product-page.styles';

function InsertProductPage() {
  const classes = useStyles();

  return (
    <Fragment>
      <Container>
        <PageWrapper>
          <div className={classes.header}>
            <Typography className={classes.textHeader} variant="h6">
              INSERT NEW PRODUCT
            </Typography>
          </div>
          <InsertProductForm/>
        </PageWrapper>
      </Container>
    </Fragment>
  );
}

export default InsertProductPage;
