import React, {Fragment, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useTheme} from '@material-ui/core/styles';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import PageWrapper from '../../components/container/container.component';
import Spinner from '../../components/spinner/spinner.component';
import CardItem from '../../components/card-item/card-item.component';
import {Icon} from '@iconify/react';
import searchOutline from '@iconify/icons-eva/search-outline';
import optionsOutline from '@iconify/icons-eva/options-outline';
import useStyles from './collections.styles';

function Collections() {
  const classes = useStyles();
  const location = useLocation();
  const theme = useTheme();
  const {id} = useParams();
  const [value, setValue] = useState(0);

  const collectionsPath = `directories/${id}/collections`;

  useFirestoreConnect(() => [{collection: collectionsPath}]);

  const collections = useSelector((state) => state.firestore.ordered[collectionsPath]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
                    <InputBase
                      className={classes.searchInput}
                      placeholder="Search for products..."
                      inputProps={{
                        style: {color: theme.palette.secondary.main},
                      }}/>
                  </div>
                  <div className={classes.filterContainer}>
                    <IconButton>
                      <Icon className={classes.icon} icon={optionsOutline}/>
                    </IconButton>
                  </div>
                </div>
                {
                  location.pathname.match('/collections/3') ? null :
                  <Tabs
                    className={classes.tabs}
                    value={value}
                    onChange={handleChange}>
                    <Tab className={classes.tab} label="all"/>
                    <Tab className={classes.tab} label="men"/>
                    <Tab className={classes.tab} label="women"/>
                  </Tabs>
                }
                <Grid className={classes.grid} container spacing={2}>
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
