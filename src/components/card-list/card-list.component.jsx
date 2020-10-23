import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import CardItem from '../card-item/card-item.component';

function CardList() {
  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={6} sm={4} md={3}>
          <CardItem/>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CardItem/>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CardItem/>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CardItem/>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CardList;
