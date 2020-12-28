import API from '../api/api';
import {FavoriteActionTypes} from '../helpers/helpers';

function insertItemToWishlistStart() {
  return {
    type: FavoriteActionTypes.ADD_ITEM_TO_FAVORITE_START,
  };
}

function insertItemToWishlistSuccess(id) {
  return {
    type: FavoriteActionTypes.ADD_ITEM_TO_FAVORITE_SUCCESS,
    payload: id,
  };
}

function insertItemToWishlistFailed(error) {
  return {
    type: FavoriteActionTypes.REMOVE_ITEM_FROM_FAVORITE,
    payload: error,
  };
}

function fetchWishlistItemsStart() {
  return {
    type: FavoriteActionTypes.FETCH_FAVORITE_ITEMS_START,
  };
}

function fetchWishlistItemsSuccess(wishlist) {
  return {
    type: FavoriteActionTypes.FETCH_FAVORITE_ITEMS_SUCCESS,
    payload: wishlist,
  };
}

function fetchWishlistItemsFailed(error) {
  return {
    type: FavoriteActionTypes.FETCH_FAVORITE_ITEMS_FAILED,
    payload: error,
  };
}

function userFavoritesEmpty(messages) {
  return {
    type: FavoriteActionTypes.USER_FAVORITES_EMPTY,
    payload: messages,
  };
}

function removeFavoriteItemSuccess(id) {
  return {
    type: FavoriteActionTypes.REMOVE_ITEM_FROM_FAVORITE,
    payload: id,
  };
}

export function insertItemToWishlist(id) {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    const headers = {headers: {'Authorization': `Bearer ${token}`}};

    dispatch(insertItemToWishlistStart());
    API.post('wishlist/insert', {'collectionId': id}, headers)
        .then((res) => {
          const wishlist = res.data;
          dispatch(insertItemToWishlistSuccess(wishlist));
        })
        .catch((error) => {
          const message = error.response.data.messages;
          dispatch(insertItemToWishlistFailed(message));
        });
  };
}

export function fetchWishlistItems() {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    const headers = {headers: {'Authorization': `Bearer ${token}`}};

    dispatch(fetchWishlistItemsStart());
    API.get('wishlist/list', headers)
        .then((res) => {
          const wishlist = res.data;
          if (wishlist.data.length === 0) return dispatch(userFavoritesEmpty(wishlist.messages));
          dispatch(fetchWishlistItemsSuccess(wishlist.data));
        })
        .catch((error) => {
          const message = error.response.data.messages;
          dispatch(fetchWishlistItemsFailed(message));
        });
  };
}

export function removeItemFromWishlist(id) {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    const headers = {headers: {'Authorization': `Bearer ${token}`}};

    API.delete(`wishlist/remove/${id}`, headers)
        .then((res) => {
          const wishlist = res.data;
          dispatch(removeFavoriteItemSuccess(wishlist.data.id));
        })
        .catch((error) => {
          const message = error.response.data.messages;
          console.log(message);
        });
  };
}

export function destroyWishlistState() {
  return {
    type: FavoriteActionTypes.DESTROY_FAVORITES_STATE,
  };
}
