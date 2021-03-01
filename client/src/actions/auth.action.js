import API from '../api/api';
import {AuthActionTypes} from '../helpers/helpers';
import {push} from 'connected-react-router';

function signInStart() {
  return {
    type: AuthActionTypes.SIGN_IN_START,
  };
}

function signInSuccess(user) {
  return {
    type: AuthActionTypes.SIGN_IN_SUCCESS,
    payload: user,
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

function signUpSuccess(user) {
  return {
    type: AuthActionTypes.SIGN_UP_SUCCESS,
    payload: user,
  };
};

function signUpFailed(error) {
  return {
    type: AuthActionTypes.SIGN_UP_FAILED,
    payload: error,
  };
}

function signOut() {
  return {
    type: AuthActionTypes.SIGN_OUT,
  };
}

const createToken = (token) => localStorage.setItem('token', token);

export function signInWithEmailAndPassword(values) {
  return async (dispatch) => {
    try {
      const data = {'email': values.email, 'password': values.password};
      dispatch(signInStart());
      const response = await API.post('auth/signin', data);
      const {user, accessToken} = response.data;
      createToken(accessToken)
      dispatch(signInSuccess(user));
      dispatch(push('/'));
    } catch (error) {
      const {response, message} = error;
      if (!response) {
        dispatch(signInFailed(message))
      } else {
        const {message} = response.data;
        dispatch(signInFailed(message));
      }
    }
  };
};

export function signUpWithEmailAndPassword(values) {
  return async (dispatch) => {
    try {
      const data = {'username': values.username, 'email': values.email, 'password': values.password};
      dispatch(signUpStart());
      const response = await API.post('auth/signup', data);
      const {user, accessToken} = response.data;
      createToken(accessToken)
      dispatch(signUpSuccess(user));
      dispatch(push('/'));
    } catch (error) {
      const {response, message} = error;
      if (!response) {
        dispatch(signUpFailed(message))
      } else {
        const {message} = response.data;
        dispatch(signUpFailed(message));
      }
    }
  };
}

export function userSignOut() {
  return (dispatch) => {
    dispatch(signOut());
    localStorage.removeItem('token');
    dispatch(push('/signin'));
  };
}
