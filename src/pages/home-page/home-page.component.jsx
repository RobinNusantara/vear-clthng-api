import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Spinner from '../../components/spinner/spinner.component';
import Directory from '../../components/directory/directory.component';
import {useStateDirectoriesContext} from '../../providers/directories-provider';
import useStyles from './home-page.styles';

function HomePage() {
  const classes = useStyles();
  const {directories, isLoading} = useStateDirectoriesContext();

  return (
    <Fragment>
      <Container>
        <div className={classes.root}>
          {
            isLoading ? <Spinner/> :
            <Grid container spacing={2}>
              {
                directories.map((directory) => (
                  <Directory key={directory.id} {...directory}/>
                ))
              }
            </Grid>
          }
        </div>
      </Container>
    </Fragment>
  );
};

export default HomePage;
