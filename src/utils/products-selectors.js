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

export const productsValueSelector = createSelector(
    [selectShop],
    (shop) => shop.value,
);

export const productsFilterSelector = createSelector(
    [selectShop],
    (shop) => shop._filter,
);

export const productsLoadingSelector = createSelector(
    [selectShop],
    (shop) => shop.isLoading,
);
