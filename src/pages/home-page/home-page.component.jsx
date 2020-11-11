import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Spinner from '../../components/spinner/spinner.component';
import useStyles from './home-page.styles';
import Directory from '../../components/directory/directory.component';

function HomePage() {
  const classes = useStyles();

  useFirestoreConnect(() => [{collection: 'directories'}]);

  const directories = useSelector((state) => state.firestore.ordered.directories);

  return (
    <Fragment>
      <Container>
        <div className={classes.root}>
          <Grid container spacing={2}>
            {
                !directories ? <Spinner/> :
                directories.map((directory) => (
                  <Directory key={directory.id} {...directory}/>
                ))
            }
          </Grid>
        </div>
      </Container>
    </Fragment>
  );
};

export default HomePage;
