import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../../components/container/container.component';
import CardList from '../../components/card-list/card-list.component';
import useStyles from './collections.styles';

function Collections() {
  const classes = useStyles();
  return (
    <Fragment>
      <Container>
        <PageWrapper>
          <div className={classes.root}>
            <div className={classes.header}>
              <Typography className={classes.textHeader} variant="h6">COLLECTIONS</Typography>
            </div>
            <CardList/>
          </div>
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

export default Collections;
