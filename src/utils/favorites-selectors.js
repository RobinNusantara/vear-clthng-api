import {createSelector} from 'reselect';

const selectFavorites = (state) => state.favorites;

export const favoritesFetchSelector = createSelector(
    [selectFavorites],
    (favorites) => favorites.wishlist,
);

export const favoritesMessagesSelector = createSelector(
    [selectFavorites],
    (favorites) => favorites.messages,
);

export const favoritesLoadingSelector = createSelector(
    [selectFavorites],
    (favorites) => favorites.isLoading,
);
