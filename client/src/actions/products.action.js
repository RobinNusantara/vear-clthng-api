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
  return async (dispatch) => {
    try {
      const formData = new FormData();
      const images = values.images;
      const sizes = values.sizes;
      const colors = values.colors;
      const headers = {headers: {'Content-Type': 'application/json'}};

      formData.append('productName', values.productName);
      formData.append('productBrand', values.productBrand);
      formData.append('productCategory', values.productCategory);
      formData.append('productType', values.productType);
      formData.append('productWeight', values.productWeight);
      formData.append('productPrice', values.productPrice);

      sizes.map((size) => formData.append('sizes[]', size));
      colors.map((color) => formData.append('colors[]', color));
      images.map((image) => formData.append('productImage', image));

      dispatch(insertProductStart());
      const response = await API.post('products/insert', formData, headers);
      const {results} = response.data;
      dispatch(insertProductSuccess(results))
    } catch (error) {
      const {response, message} = error;
      if (!response) {
        dispatch(insertProductFailed(message));
      } else {
        const {message} = response.data;
        dispatch(insertProductFailed(message))
      }
    }
  };
}

export function fetchProducts() {
  return async (dispatch) => {
    try {
      dispatch(fetchProductsStart());
      const response = await API.get('products/all/list');
      const {results} = response.data;
      dispatch(fetchProductsSuccess(results));
    } catch (error) {
      const {response, message} = error;
      if (!response) {
        dispatch(fetchProductsFailed(message))
      } else {
        const {message} = response.data;
        dispatch(fetchProductsFailed(message));
      }
    }
  }
}

export function fetchProductsCategory(params) {
  return async (dispatch) => {
    try {
      dispatch(fetchProductsStart());
      const response = await API.get(`products/list/${params}`);
      const {results} = response.data;
      dispatch(fetchProductsSuccess(results))
    } catch (error) {
      const {response, message} = error;
      if (!response) {
        dispatch(fetchProductsFailed(message))
      } else {
        const {message} = response.data;
        dispatch(fetchProductsFailed(message));
      }
    }
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
  return async (dispatch) => {
    try {
      dispatch(fetchProductStart());
      const response = await API.get(`products/details/${params}`);
      const {results} = response.data;
      dispatch(fetchProductSuccess(results));
    } catch (error) {
      const {response, message} = error;
      if (!response) {
        dispatch(fetchProductFailed(message))
      } else {
        const {message} = response.data;
        dispatch(fetchProductFailed(message));
      }
    }
  };
}
