import axios from 'axios';
import API from '../api/api';
import {ProductActionTypes} from '../helpers/helpers';

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

function fetchProductsStart() {
  return {
    type: ProductActionTypes.FETCH_PRODUCTS_START,
  };
}

function fetchProductsSuccess(products) {
  return {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
}

function fetchProductsFailed(error) {
  return {
    type: ProductActionTypes.FETCH_PRODUCTS_FAILED,
    payload: error,
  };
}

function fetchProductStart() {
  return {
    type: ProductActionTypes.FETCH_PRODUCT_START,
  };
}

function fetchProductSuccess(product) {
  return {
    type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
    payload: product,
  };
}

function fetchProductFailed(error) {
  return {
    type: ProductActionTypes.FETCH_PRODUCT_FAILED,
    payload: error,
  };
}

export function destroyProductsState() {
  return {
    type: ProductActionTypes.DESTROY_PRODUCTS_STATE,
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
    formData.append('productType', values.productType);
    formData.append('productColor', values.productColor);
    formData.append('productSize', values.productSize);
    formData.append('productPrice', values.productPrice);

    files.map((file) => formData.append('productImage', file));
    dispatch(insertProductStart());
    API.post('products/insert', formData, headers)
        .then((res) => dispatch(insertProductSuccess(res)))
        .catch((error) => {
          const {response, message} = error;
          if (!response) {
            dispatch(insertProductFailed(message));
          } else {
            const {message} = response.data;
            dispatch(insertProductFailed(message))
          }
        });
  };
}

export function fetchProducts(params) {
  return (dispatch) => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const cancellation = {cancelToken: source.token};

    dispatch(fetchProductsStart());
    API.get(`products/list/${params}`, cancellation)
        .then((res) => {
          const products = res.data;
          dispatch(fetchProductsSuccess(products.data))
        })
        .catch((error) => {
          const {response, message} = error;
          if (!response) {
            dispatch(fetchProductsFailed(message))
          } else {
            const {message} = response.data;
            dispatch(fetchProductsFailed(message));
          }
        });
  };
}

export function searchAnyProduct(value) {
  return {
    type: ProductActionTypes.SEARCH_ANY_PRODUCT,
    payload: value,
  };
}

export function filterMenCollections(results) {
  return {
    type: ProductActionTypes.FILTER_MEN_PRODUCTS,
    payload: results.filter((product) => product.productType === 'Men'),
  };
};

export function filterWomenCollections(results) {
  return {
    type: ProductActionTypes.FILTER_WOMEN_PRODUCTS,
    payload: results.filter((product) => product.productType === 'Women'),
  };
}

export function defaultCollections() {
  return {
    type: ProductActionTypes.DEFAULT_PRODUCTS,
  };
}

export function fetchProduct(params) {
  return (dispatch) => {
    dispatch(fetchProductStart());
    API.get(`products/details/${params}`)
        .then((res) => {
          const product = res.data;
          dispatch(fetchProductSuccess(product.data));
        })
        .catch((error) => {
          const {response, message} = error;
          if (!response) {
            dispatch(fetchProductFailed(message))
          } else {
            const {message} = response.data;
            dispatch(fetchProductFailed(message));
          }
        });
  };
}
