import {createSelector} from 'reselect';

const selectShop = (state) => state.shop;

export const productsSelector = createSelector(
    [selectShop],
    (shop) => shop.products,
);

export const productsFetching = createSelector(
    [selectShop],
    (shop) => shop.isLoading,
);

export const productsLoaded = createSelector(
    [selectShop],
    (shop) => !!shop.products,
);
