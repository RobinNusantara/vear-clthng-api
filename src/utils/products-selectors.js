import {createSelector} from 'reselect';

const selectShop = (state) => state.shop;

export const productsFetchSelector = createSelector(
    [selectShop],
    (shop) => shop.products,
);

export const productFetchSelector = createSelector(
    [selectShop],
    (shop) => shop.product,
);

export const productsLoadingSelector = createSelector(
    [selectShop],
    (shop) => shop.isLoading,
);
