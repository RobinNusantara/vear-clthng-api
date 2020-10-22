import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Directory from '../directory/directory.component';
import DirectoryData from '../../data/directory-data';

function Directories() {
  return (
    <Fragment>
      <Grid container spacing={2}>
        {
          DirectoryData.map((directory, idx) => (
            <Grid
              key={idx}
              item
              xs={directory.xs}
              md={directory.md}>
              <Directory
                title={directory.title.toUpperCase()}
                imageUrl={directory.imageUrl}
                smScreen={directory.smScreen}
                mdScreen={directory.mdScreen}
              />
            </Grid>
          ))
        }
      </Grid>
    </Fragment>
  );
};

export default Directories;
