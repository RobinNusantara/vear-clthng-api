import API from '../api/api';
import {ProductActionTypes} from '../helpers/helpers';

function fetchProductStart() {
  return {
    type: ProductActionTypes.FETCH_PRODUCT_START,
  };
}

function fetchProductSuccess(products) {
  return {
    type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
    payload: products,
  };
}

function fetchProductFailed(error) {
  return {
    type: ProductActionTypes.FETCH_PRODUCT_FAILED,
    payload: error,
  };
}

export function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductStart());
    API.get('products/all')
        .then((res) => res.data)
        .then((res) => dispatch(fetchProductSuccess(res.data)))
        .catch((error) => dispatch(fetchProductFailed(error.messages)));
  };
}
