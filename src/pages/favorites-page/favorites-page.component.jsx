import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {favoritesFetchSelector, favoritesMessagesSelector, favoritesLoadingSelector} from '../../utils/favorites-selectors';
import {fetchWishlistItems, removeItemFromWishlist, destroyWishlistState} from '../../actions/wishlist.action';
import Container from '@material-ui/core/Container';
import PageWrapper from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import UserDataTable from '../../components/user-data-table/user-data-table.component';
import Spinner from '../../components/spinner/spinner.component';
import EmptyData from '../../components/empty-data/empty-data.component';

function FavoritesPage() {
  const dispatch = useDispatch();
  const favorites = useSelector(favoritesFetchSelector);
  const messages = useSelector(favoritesMessagesSelector);
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
            isFetching ? <Spinner/> :
            favorites.length === 0 ? <EmptyData {...messages}/> :
            <Fragment>
              <Header collection={favorites} title="Wishlist"/>
              <UserDataTable items={favorites} removeItem={removeItemFromWishlist}/>
            </Fragment>
          }
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

export default FavoritesPage;
