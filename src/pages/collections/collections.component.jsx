import React, {Fragment} from 'react';
// import {useParams} from 'react-router-dom';
// import {useSelector, connect} from 'react-redux';
// import {useFirestoreConnect} from 'react-redux-firebase';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../../components/container/container.component';
// import Spinner from '../../components/spinner/spinner.component';
// import CardItem from '../../components/card-item/card-item.component';
import useStyles from './collections.styles';

function Collections({collections}) {
  const classes = useStyles();
  // const {id} = useParams();

  // useFirestoreConnect(() => [
  //   {collection: 'directories'},
  //   {
  //     collection: 'directories',
  //     where: id,
  //     subcollections: [
  //       {collection: 'collections'},
  //     ],
  //     storeAs: Collection,
  //   },
  // ]);

  // const collections = useSelector((state) => state.firestore.ordered.collection);

  return (
    <Fragment>
      <Container>
        <PageWrapper>
          <div className={classes.root}>
            <div className={classes.header}>
              <Typography className={classes.textHeader} variant="h6">COLLECTIONS</Typography>
            </div>
            <Grid container spacing={1}>
              {/* {
                !collections ? <Spinner/> :
                collections.map((collection) => <CardItem key={collection.id} {...collection}/>)
              } */}
            </Grid>
          </div>
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

export default Collections;
