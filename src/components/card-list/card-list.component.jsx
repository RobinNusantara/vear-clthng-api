import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import CardItem from '../card-item/card-item.component';

function CardList() {
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <CardItem/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardItem/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardItem/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardItem/>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CardList;
