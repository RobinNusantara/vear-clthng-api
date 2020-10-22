import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import Directories from '../../components/directories/directories.component';
import useStyles from './home-page.styles';

function HomePage() {
  const classes = useStyles();
  return (
    <Fragment>
      <Container>
        <div className={classes.root}>
          <Directories/>
        </div>
      </Container>
    </Fragment>
  );
};

export default HomePage;
