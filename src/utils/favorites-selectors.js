import {createSelector} from 'reselect';

const selectFavorites = (state) => state.favorites;

export const favoritesFetchSelector = createSelector(
    [selectFavorites],
    (favorites) => favorites.wishlist,
);

export const favoritesLoadingSelector = createSelector(
    [selectFavorites],
    (favorites) => favorites.isLoading,
);

export const favoritesErrorSelector = createSelector(
    [selectFavorites],
    (favorites) => favorites.error,
);
