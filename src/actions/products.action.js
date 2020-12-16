import axios from 'axios';
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

function insertProductStart() {
  return {
    type: ProductActionTypes.INSERT_PRODUCT_START,
  };
}

function insertProductSuccess(product) {
  return {
    type: ProductActionTypes.INSERT_PRODUCT_SUCCESS,
    payload: product,
  };
}

function insertProductFailed(error) {
  return {
    type: ProductActionTypes.INSERT_PRODUCT_FAILED,
    payload: error,
  };
}

export function insertProduct(values) {
  return (dispatch) => {
    const formData = new FormData();
    const files = values.files;
    const headers = {headers: {'Content-Type': 'application/json'}};

    formData.append('productName', values.productName);
    formData.append('productBrand', values.productBrand);
    formData.append('productCategory', values.productCategory);
    formData.append('productColor', values.productColor);
    formData.append('productSize', values.productSize);
    formData.append('productPrice', values.productPrice);

    files.forEach((file) => formData.append('productImage', file));
    dispatch(insertProductStart());
    API.post('products/insert', formData, headers)
        .then((res) => dispatch(insertProductSuccess(res)))
        .catch((error) => dispatch(insertProductFailed(error)));
  };
}

export function fetchProducts() {
  return (dispatch) => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const cancellation = {cancelToken: source.token};

    dispatch(fetchProductStart());
    API.get('products/all', cancellation)
        .then((res) => res.data)
        .then((res) => dispatch(fetchProductSuccess(res.data)))
        .catch((error) => dispatch(fetchProductFailed(error)));
  };
}
