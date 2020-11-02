import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import {selectCollections} from '../../utils/collections-selector';
import {getCollections} from '../../actions/collections.action';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../../components/container/container.component';
import CardItem from '../../components/card-item/card-item.component';
import useStyles from './collections.styles';

function Collections({collections, fetchCollections}) {
  const classes = useStyles();

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <Fragment>
      <Container>
        <PageWrapper>
          <div className={classes.root}>
            <div className={classes.header}>
              <Typography className={classes.textHeader} variant="h6">COLLECTIONS</Typography>
            </div>
            <Grid container spacing={1}>
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

const mapStateToProps = (state) => ({
  collections: selectCollections(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCollections: () => dispatch(getCollections(ownProps.match.params.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Collections);
