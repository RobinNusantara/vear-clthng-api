const initialState = {
  error: null,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN_START':
      return {
        isLoading: true,
      };
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        error: null,
        isLoading: false,
      };
    case 'SIGN_IN_FAILED':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default: return state;
  };
};

export default authReducer;
