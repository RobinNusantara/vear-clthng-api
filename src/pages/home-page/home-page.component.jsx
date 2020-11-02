import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import {selectDirectories} from '../../utils/directories-selector';
import {getDirectories} from '../../actions/directories.action';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Directory from '../../components/directory/directory.component';
import useStyles from './home-page.styles';

function HomePage({directories, fetchDirectories}) {
  const classes = useStyles();

  useEffect(() => {
    fetchDirectories();
  }, [fetchDirectories]);

  return (
    <Fragment>
      <Container>
        <div className={classes.root}>
          <Grid container spacing={2}>
            {
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

const mapStateToProps = (state) => ({
  directories: selectDirectories(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchDirectories: () => dispatch(getDirectories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
