import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useStyles from './shop-page.styles';
import Directory from '../../components/directory/directory.component';
import directories from '../../data/directories';

function HomePage() {
  const classes = useStyles();

  return (
    <Fragment>
      <Container>
        <div className={classes.root}>
          <Grid container spacing={2}>
            {
              directories.map((directory, idx) => (
                <Directory key={idx} {...directory}/>
              ))
            }
          </Grid>
        </div>
      </Container>
    </Fragment>
  );
};

export default HomePage;
