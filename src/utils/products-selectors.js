import {createSelector} from 'reselect';

const selectShop = (state) => state.shop;

export const productsSelector = createSelector(
    [selectShop],
    (shop) => shop.products,
);
