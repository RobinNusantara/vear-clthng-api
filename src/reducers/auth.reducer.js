import {AuthActionTypes} from '../helpers/helpers';

const initialState = {
  signInError: '',
  signUpError: '',
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.SIGN_UP_START:
    case AuthActionTypes.SIGN_IN_START:
      return {
        isLoading: true,
      };
    case AuthActionTypes.SIGN_UP_SUCCESS:
    case AuthActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case AuthActionTypes.SIGN_UP_FAILED:
      return {
        ...state,
        signUpError: action.payload,
        isLoading: false,
      };
    case AuthActionTypes.SIGN_IN_FAILED:
      return {
        ...state,
        signInError: action.payload,
        isLoading: false,
      };
    default: return state;
  };
};

export default authReducer;
