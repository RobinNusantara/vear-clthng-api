import {createSelector} from 'reselect';

const selectBags = (state) => state.bags;

export const bagsFetchSelector = createSelector(
    [selectBags],
    (bags) => bags.carts,
);

export const bagsLoadingSelector = createSelector(
    [selectBags],
    (bags) => bags.isLoading,
);
