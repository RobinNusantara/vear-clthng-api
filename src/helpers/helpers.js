export const AuthActionTypes = {
  SIGN_IN_START: 'SIGN_IN_START',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILED: 'SIGN_IN_FAILED',
  SIGN_UP_START: 'SIGN_UP_START',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILED: 'SIGN_UP_FAILED',
};

export const CartActionTypes = {
  ADD_ITEM_TO_CART_START: 'ADD_ITEM_TO_CART_START',
  ADD_ITEM_TO_CART_SUCCESS: 'ADD_ITEM_TO_CART_SUCCESS',
  ADD_ITEM_TO_CART_FAILED: 'ADD_ITEM_TO_CART_FAILED',
  FETCH_CART_ITEMS_START: 'FETCH_CART_ITEMS_START',
  FETCH_CART_ITEMS_SUCCESS: 'FETCH_CART_ITEMS_SUCCESS',
  FETCH_CART_ITEMS_FAILED: 'FETCH_CART_ITEMS_FAILED',
  USER_CART_EMPTY: 'USER_CART_EMPTY',
  REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
  UPDATE_CART_ITEM: 'UPDATE_CART_ITEM',
  DESTROY_CART_STATE: 'DESTROY_CART_STATE',
};

export const FavoriteActionTypes = {
  ADD_ITEM_TO_FAVORITE_START: 'ADD_ITEM_TO_FAVORITE_START',
  ADD_ITEM_TO_FAVORITE_SUCCESS: 'ADD_ITEM_TO_FAVORITE_SUCCESS',
  ADD_ITEM_TO_FAVORITE_FAILED: 'ADD_ITEM_TO_FAVORITE_FAILED',
  FETCH_FAVORITE_ITEMS_START: 'FETCH_FAVORITE_ITEMS_START',
  FETCH_FAVORITE_ITEMS_SUCCESS: 'FETCH_FAVORITE_ITEMS_SUCCESS',
  FETCH_FAVORITE_ITEMS_FAILED: 'FETCH_FAVORITE_ITEMS_FAILED',
  USER_FAVORITES_EMPTY: 'USER_FAVORITES_EMPTY',
  REMOVE_ITEM_FROM_FAVORITE: 'REMOVE_ITEM_FROM_FAVORITE',
  DESTROY_FAVORITES_STATE: 'DESTROY_FAVORITES_STATE',
};

export const ProductActionTypes = {
  INSERT_PRODUCT_START: 'INSERT_PRODUCT_START',
  INSERT_PRODUCT_SUCCESS: 'INSERT_PRODUCT_SUCCESS',
  INSERT_PRODUCT_FAILED: 'INSERT_PRODUCT_FAILED',
  FETCH_PRODUCTS_START: 'FETCH_PRODUCTS_START',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILED: 'FETCH_PRODUCTS_FAILED',
  FETCH_PRODUCT_START: 'FETCH_PRODUCT_START',
  FETCH_PRODUCT_SUCCESS: 'FETCH_PRODUCT_SUCCESS',
  FETCH_PRODUCT_FAILED: 'FETCH_PRODUCT_FAILED',
  DESTROY_PRODUCTS_STATE: 'DESTROY_PRODUCTS_STATE',
};
