import {DirectoryTypes} from '../helpers/types';

export const fetchDirectoryStart = () => ({
  type: DirectoryTypes.FETCH_DIRECTORY_START,
});

export const fetchDirectorySuccess = (directories) => ({
  type: DirectoryTypes.FETCH_DIRECTORY_SUCCESS,
  payload: directories,
});

export const fetchDirectoryFailed = (error) => ({
  type: DirectoryTypes.FETCH_DIRECTORY_FAILED,
  payload: error,
});
