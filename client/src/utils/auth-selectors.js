import {createSelector} from 'reselect';

const selectAuth = (state) => state.auth;

export const authUserSelector = createSelector(
    [selectAuth],
    (auth) => auth.user,
);

export const authLoadingSelector = createSelector(
    [selectAuth],
    (auth) => auth.isLoading,
);

export const authSignInErrorSelector = createSelector(
    [selectAuth],
    (auth) => auth.signInError,
);

export const authSignUpErrorSelector = createSelector(
    [selectAuth],
    (auth) => auth.signUpError,
);
