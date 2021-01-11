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

export function signInWithEmailAndPassword(values) {
  return (dispatch) => {
    const data = {
      'email': values.email,
      'password': values.password,
    };

    dispatch(signInStart());
    API.post('/auth/signin', data)
        .then((res) => {
          const user = res.data;
          const {data, accessToken} = user;
          localStorage.setItem('token', accessToken);
          dispatch(signInSuccess(data));
        })
        .then(() => dispatch(push('/shop')))
        .catch((error) => {
          const {response, message} = error;
          if (!response) {
            dispatch(signInFailed(message))
          } else {
            const {message} = response.data;
            dispatch(signInFailed(message));
          }
        });
  };
};

export function signUpWithEmailAndPassword(values) {
  return (dispatch) => {
    const data = {
      'username': values.username,
      'email': values.email,
      'password': values.password,
    };

    dispatch(signUpStart());
    API.post('/auth/signup', data)
        .then((res) => {
          const user = res.data;
          const {data, accessToken} = user;
          localStorage.setItem('token', accessToken);
          dispatch(signUpSuccess(data));
        })
        .then(() => dispatch(push('/shop')))
        .catch((error) => {
          const {response, message} = error;
          if (!response) {
            dispatch(signUpFailed(message))
          } else {
            const {message} = response.data;
            dispatch(signUpFailed(message));
          }
        });
  };
}

export function userSignOut() {
  return (dispatch) => {
    dispatch(signOut());
    localStorage.removeItem('token');
    dispatch(push('/signin'));
  };
}
