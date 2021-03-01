import API from '../api/api';
import {CartActionTypes} from '../helpers/helpers';

function insertItemToCartStart() {
  return {
    type: CartActionTypes.ADD_ITEM_TO_CART_START,
  };
}

function insertItemToCartSuccess(id) {
  return {
    type: CartActionTypes.ADD_ITEM_TO_CART_SUCCESS,
    payload: id,
  };
}

function insertItemToCartFailed(error) {
  return {
    type: CartActionTypes.ADD_ITEM_TO_CART_FAILED,
    payload: error,
  };
}

function fetchCartItemsStart() {
  return {
    type: CartActionTypes.FETCH_CART_ITEMS_START,
  };
}

function fetchCartItemsSuccess(carts) {
  return {
    type: CartActionTypes.FETCH_CART_ITEMS_SUCCESS,
    payload: carts,
  };
}

function fetchCartItemsFailed(error) {
  return {
    type: CartActionTypes.FETCH_CART_ITEMS_FAILED,
    payload: error,
  };
}

function removeCartItemSuccess(id) {
  return {
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: id,
  };
}

function removeCartItemsSuccess() {
  return {
    type: CartActionTypes.REMOVE_ITEMS_FROM_CART,
  };
}

export function insertItemToCart(id) {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {headers: {'Authorization': `Bearer ${token}`}};
      dispatch(insertItemToCartStart());
      const response = await API.post('carts/insert', {'collectionId': id}, headers);
      const {results} = response.data;
      dispatch(insertItemToCartSuccess(results.id));
    } catch (error) {
      const {response, message} = error;
      if (!response) {
        console.log(message);
        dispatch(insertItemToCartFailed(message));
      } else {
        const {message} = response.data;
        dispatch(insertItemToCartFailed(message));
      }
    }
  };
}

export function fetchCartsItems() {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {headers: {'Authorization': `Bearer ${token}`}};
      dispatch(fetchCartItemsStart());
      const response = await API.get('carts/list', headers);
      const {results} = response.data;
      dispatch(fetchCartItemsSuccess(results));
    } catch (error) {
      const {response, message} = error;
      if (!response) {
        dispatch(fetchCartItemsFailed(message));
      } else {
        const {message} = response.data;
        dispatch(fetchCartItemsFailed(message));
      }
    }
  };
}

export function removeItemFromCart(id) {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {headers: {'Authorization': `Bearer ${token}`}};
      const response = await API.delete(`carts/remove/${id}`, headers);
      const {results} = response.data;
      dispatch(removeCartItemSuccess(results.id));
    } catch (error) {
      const {message} = error.response.data;
      console.error(message);
    }
  };
}

export function removeItemsFromCart() {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {headers: {'Authorization': `Bearer ${token}`}};
      await API.delete('carts/delete/all', headers)
      dispatch(removeCartItemsSuccess());
    } catch (error) {
      const {message} = error.response.data;
      console.error(message);
    }
  };
}

export function destroyCartsState() {
  return {
    type: CartActionTypes.DESTROY_CART_STATE,
  };
}
