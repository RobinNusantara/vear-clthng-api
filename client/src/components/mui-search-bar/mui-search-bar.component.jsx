import React, {Fragment} from 'react';
import InputBase from '@material-ui/core/InputBase';
import {Icon} from '@iconify/react';
import searchOutline from '@iconify/icons-eva/search-outline';
import useStyle from './mui-search-bar.styles';

function MuiSearchBar({handleChange, disabled}) {
  const classes = useStyle();

  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.searchContainer}>
          <div className={classes.searchContainerIcon}>
            <Icon className={classes.searchIcon} icon={searchOutline}/>
          </div>
          <InputBase
            className={classes.searchContainerInput}
            type="text"
            placeholder="Search"
            onChange={handleChange}
            disabled={disabled}/>
        </div>
      </div>
    </Fragment>
  );
}

export default MuiSearchBar;
