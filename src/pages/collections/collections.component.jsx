import React, {Fragment, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../../components/container/container.component';
import CardItem from '../../components/card-item/card-item.component';
import {firestore} from '../../config/firebase';
import useStyles from './collections.styles';

function Collections() {
  const [collections, setCollections] = useState([]);
  const classes = useStyles();
  const {id} = useParams();

  useEffect(() => {
    const unsubscribe = firestore.collection('directories')
        .doc(id)
        .collection('collections')
        .onSnapshot((snapshot) => {
          const newCollections = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setCollections(newCollections);
        });
    return unsubscribe;
  }, [id]);

  return (
    <Fragment>
      <Container>
        <PageWrapper>
          <div className={classes.root}>
            <div className={classes.header}>
              <Typography className={classes.textHeader} variant="h6">COLLECTIONS</Typography>
            </div>
            <Grid container spacing={3}>
              {
                collections.map((collection) => <CardItem key={collection.id} {...collection}/>)
              }
            </Grid>
          </div>
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

export default Collections;
