import React, {Fragment} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import PageWrapper from '../../components/container/container.component';
import Spinner from '../../components/spinner/spinner.component';
import CardItem from '../../components/card-item/card-item.component';
import {Icon} from '@iconify/react';
import searchOutline from '@iconify/icons-eva/search-outline';
import useStyles from './collections.styles';

function Collections() {
  const classes = useStyles();
  const {id} = useParams();
  const collectionsPath = `directories/${id}/collections`;

  useFirestoreConnect(() => [{collection: collectionsPath}]);

  const collections = useSelector((state) => state.firestore.ordered[collectionsPath]);

  return (
    <Fragment>
      <Container>
        <PageWrapper>
          <div className={classes.root}>
            {
              !collections ? <Spinner/> :
              <Fragment>
                <div className={classes.mobileDeviceHeader}>
                  <div className={classes.searchContainer}>
                    <div className={classes.searchIcon}>
                      <Icon className={classes.icon} icon={searchOutline}/>
                    </div>
                    <InputBase className={classes.searchInput} placeholder="Search..."/>
                  </div>
                </div>
                <Grid container spacing={2}>
                  {
                    collections.map((collection) => <CardItem key={collection.id} {...collection}/>)
                  }
                </Grid>
              </Fragment>
            }
          </div>
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

export default Collections;
