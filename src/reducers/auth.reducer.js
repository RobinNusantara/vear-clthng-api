import {AuthActionTypes} from '../helpers/helpers';

const initialState = {
  isLoading: false,
  user: null,
  signInError: '',
  signUpError: '',
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
        user: action.payload,
      };
    case AuthActionTypes.SIGN_UP_FAILED:
      return {
        ...state,
        isLoading: false,
        signUpError: action.payload,
      };
    case AuthActionTypes.SIGN_IN_FAILED:
      return {
        ...state,
        isLoading: false,
        signInError: action.payload,
      };
    case AuthActionTypes.SIGN_OUT:
      return initialState;
    default:
      return state;
  };
};

export default authReducer;
