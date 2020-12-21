import API from '../api/api';
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

export function signUpWithEmailAndPassword(values) {
  return (dispatch) => {
    const data = {
      'username': values.username,
      'email': values.email,
      'password': values.password,
    };

    dispatch(signUpStart());
    API.post('user/auth/register', data)
        .then((res) => dispatch(signUpSuccess(res)))
        .catch((error) => {
          const message = error.response.data.messages;
          dispatch(signUpFailed(message));
        });
  };
}
