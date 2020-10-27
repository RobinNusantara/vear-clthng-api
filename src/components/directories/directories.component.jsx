import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Directory from '../directory/directory.component';
import DirectoryData from '../../data/directory-data';

function Directories() {
  return (
    <Fragment>
      <Grid container spacing={2}>
        {
          DirectoryData.map((directory) => (
            <Directory key={directory.id} {...directory} />
          ))
        }
      </Grid>
    </Fragment>
  );
};

export default Directories;
