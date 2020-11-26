function signInStart() {
  return {
    type: 'SIGN_IN_START',
  };
}

function signInSuccess() {
  return {
    type: 'SIGN_IN_SUCCESS',
  };
}

function signInFailed(error) {
  return {
    type: 'SIGN_IN_FAILED',
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
        .catch((error) => dispatch(signInFailed(error.message)));
  };
}
