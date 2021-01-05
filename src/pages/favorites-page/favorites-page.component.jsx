import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {favoritesFetchSelector, favoritesLoadingSelector} from '../../utils/favorites-selectors';
import {fetchWishlistItems, destroyWishlistState} from '../../actions/wishlist.action';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../../components/container/container.component';
import MuiSpinner from '../../components/mui-spinner/mui-spinner.component';
import DataTableFavorite from '../../components/data-table-favorite/data-table-favorite';
import DataEmptyTable from '../../components/data-empty-table/data-empty-table.component';
import {Icon} from '@iconify/react';
import trashOutline from '@iconify/icons-eva/trash-outline';
import EmptyWishlistImage from '../../assets/images/empty-wishlist.svg';
import useStyles from '../../styles/cart-favorite-page.styles';

function FavoritesPage() {
  const dispatch = useDispatch();
  const favorites = useSelector(favoritesFetchSelector);
  const isFetching = useSelector(favoritesLoadingSelector);

  useEffect(() => {
    dispatch(fetchWishlistItems());
    return () => dispatch(destroyWishlistState());
  }, [dispatch]);

  return (
    <Fragment>
      <Container>
        <PageWrapper>
          {
            isFetching ? <MuiSpinner/> :
            favorites.length === 0 ? <DataEmptyTable icon={EmptyWishlistImage} title="wishlist"/> :
            <Fragment>
              <FavoriteHeader/>
              <DataTableFavorite />
            </Fragment>
          }
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

function FavoriteHeader() {
  const classes = useStyles();
  const favorites = useSelector(favoritesFetchSelector);

  return (
    <div className={classes.header}>
      <div className={classes.leftBox}>
        <Typography className={classes.textHeader} variant="h6">
          Wishlist
        </Typography>
        <Typography
          className={classes.textSubtitle}
          variant="subtitle1"
          color="textSecondary">
          {favorites.length} Items
        </Typography>
      </div>
      <div className={classes.rightBox}>
        <IconButton className={classes.icon}>
          <Icon height={24} width={24} icon={trashOutline}/>
        </IconButton>
      </div>
    </div>
  );
}

export default FavoritesPage;
