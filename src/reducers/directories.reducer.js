import DirActions from '../actions/directories.action';

export const initialState = {
  directories: [],
  isLoading: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case DirActions.FETCH_DIR_START:
      return {
        ...state,
        directories: [],
        isLoading: true,
      };
    case DirActions.FETCH_DIR_SUCCESS:
      return {
        ...state,
        directories: action.payload,
        isLoading: false,
      };
    default: return;
  };
};
