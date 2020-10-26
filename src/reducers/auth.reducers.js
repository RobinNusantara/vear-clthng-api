export const initialState = {
  isLoading: false,
  currentUser: null,
  error: null,
};

export const authReducers = (state, action) => {
  switch (action) {
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
        error: null,
      };
    case 'SIGN_OUT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        currentUser: null,
        error: null,
      };
    default: return;
  };
};
