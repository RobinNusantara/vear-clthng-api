import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import ProductForm from './product-insert-form.component';
import useStyles from './product-styles';

function ProductInsert() {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.backdrop}/>
        <div className={classes.content}>
          <Container>
            <Paper className={classes.paper}>
              <Box>
                <ProductForm/>
              </Box>
            </Paper>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductInsert;
