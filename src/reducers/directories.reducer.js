import {DirectoryTypes} from '../helpers/types';

const initialState = {
  sections: [],
  isLoading: false,
  error: '',
};

function directoriesReducer(state = initialState, action) {
  switch (action.type) {
    case DirectoryTypes.FETCH_DIRECTORY_START:
      return {
        ...state,
        isLoading: true,
      };
    case DirectoryTypes.FETCH_DIRECTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sections: action.payload,
      };
    case DirectoryTypes.FETCH_DIRECTORY_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default: return state;
  };
};

export default directoriesReducer;
