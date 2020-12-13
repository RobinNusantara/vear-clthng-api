import {AuthActionTypes} from '../helpers/helpers';
import {push} from 'connected-react-router';

function signInStart() {
  return {
    type: AuthActionTypes.SIGN_IN_START,
  };
}

function signInSuccess() {
  return {
    type: AuthActionTypes.SIGN_IN_SUCCESS,
  };
}

function signInFailed(error) {
  return {
    type: AuthActionTypes.SIGN_IN_FAILED,
    payload: error,
  };
}

function signUpStart() {
  return {
    type: AuthActionTypes.SIGN_UP_START,
  };
}

function signUpSuccess() {
  return {
    type: AuthActionTypes.SIGN_UP_SUCCESS,
  };
};

function signUpFailed(error) {
  return {
    type: AuthActionTypes.SIGN_UP_FAILED,
    payload: error,
  };
}

export function signInWithEmailAndPassword(credentials) {
  return async (dispatch, getState, getFirebase) => {
    dispatch(signInStart());
    return await getFirebase().login({
      email: credentials.email,
      password: credentials.password,
    })
        .then(() => dispatch(signInSuccess()))
        .then(() => dispatch(push('/shop')))
        .catch((error) => dispatch(signInFailed(error.message)));
  };
}

export function signUpWithEmailAndPassword(credentials) {
  return async (dispatch, getState, getFirebase) => {
    dispatch(signUpStart());
    return await getFirebase().createUser({
      email: credentials.email,
      password: credentials.password,
    },
    {
      avatarUrl: '',
      displayName: credentials.displayName,
      email: credentials.email,
    })
        .then(() => dispatch(signUpSuccess()))
        .then(() => dispatch(push('/shop')))
        .catch((error) => dispatch(signUpFailed(error.message)));
  };
}
