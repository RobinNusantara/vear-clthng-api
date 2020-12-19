import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import InsertProductForm from '../../components/insert-product-form/insert-product-form.component';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './insert-product-page.styles';

function InsertProductPage() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Fragment>
      <Container className={classes.root}>
        <div className={classes.header}>
          <Typography className={classes.textHeader} variant="h6">
              Insert New Product
          </Typography>
          <Button
            className={classes.buttonHeader}
            variant="contained"
            disableElevation={true}
            startIcon={<CloseIcon/>}
            onClick={() => history.goBack()}>Cancel</Button>
        </div>
        <InsertProductForm/>
      </Container>
    </Fragment>
  );
}

export default InsertProductPage;
