import {createSelector} from 'reselect';

const selectAuth = (state) => state.auth;

export const authSignInErrorSelector = createSelector(
    [selectAuth],
    (auth) => auth.signInError,
);

export const authSignUpErrorSelector = createSelector(
    [selectAuth],
    (auth) => auth.signUpError,
);

export const authLoadingSelector = createSelector(
    [selectAuth],
    (auth) => auth.isLoading,
);
