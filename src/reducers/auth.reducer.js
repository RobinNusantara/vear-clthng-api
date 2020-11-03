import {AuthTypes} from '../helpers/types';

const initialState = {
  currentUser: null,
  isLoading: false,
  error: '',
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case AuthTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case AuthTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case AuthTypes.SIGN_IN_FAILURE:
    case AuthTypes.SIGN_OUT_FAILURE:
    case AuthTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default: return state;
  }
}

export default authReducer;
