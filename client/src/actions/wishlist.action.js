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
    type: FavoriteActionTypes.ADD_ITEM_TO_FAVORITE_FAILED,
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

function removeFavoriteItemSuccess(id) {
  return {
    type: FavoriteActionTypes.REMOVE_ITEM_FROM_FAVORITE,
    payload: id,
  };
}
function removeFavoriteItemsSuccess() {
  return {
    type: FavoriteActionTypes.REMOVE_ITEMS_FROM_FAVORITE,
  };
}

export function insertItemToWishlist(id) {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {headers: {'Authorization': `Bearer ${token}`}};
      dispatch(insertItemToWishlistStart());
      const response = await API.post('wishlist/insert', {'collectionId': id}, headers);
      const {results} = response.data;
      dispatch(insertItemToWishlistSuccess(results.id));
    } catch (error) {
      const {response, message} = error;
      if (!response) {
        dispatch(insertItemToWishlistFailed(message));
      } else {
        const {message} = response.data;
        dispatch(insertItemToWishlistFailed(message));
      }
    }
  };
}

export function fetchWishlistItems() {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {headers: {'Authorization': `Bearer ${token}`}};
      dispatch(fetchWishlistItemsStart());
      const response = await API.get('wishlist/list', headers);
      const {results} = response.data; 
      dispatch(fetchWishlistItemsSuccess(results));
    } catch (error) {
      const {response, message} = error;
      if (!response) {
        dispatch(fetchWishlistItemsFailed(message));
      } else {
        const {message} = response.data;
        dispatch(fetchWishlistItemsFailed(message));
      }
    }
  };
}

export function removeItemFromWishlist(id) {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {headers: {'Authorization': `Bearer ${token}`}};
      const response = await API.delete(`wishlist/remove/${id}`, headers);
      const {results} = response.data;
      dispatch(removeFavoriteItemSuccess(results.id));
    } catch (error) {
      const {message} = error.response.data;
      console.error(message);
    }
  };
}

export function removeItemsFromWishlist() {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {headers: {'Authorization': `Bearer ${token}`}};
      await API.delete('wishlist/delete/all', headers);
      dispatch(removeFavoriteItemsSuccess())
    } catch (error) {
      const message = error.response.data.messages;
      console.error(message);
    }
  };
}

export function destroyWishlistState() {
  return {
    type: FavoriteActionTypes.DESTROY_FAVORITES_STATE,
  };
}
