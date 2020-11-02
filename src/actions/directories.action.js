import {DirectoryTypes} from '../helpers/types';
import {firestore} from '../config/firebase';

const fetchDirectoryStart = () => ({
  type: DirectoryTypes.FETCH_DIRECTORY_START,
});

const fetchDirectorySuccess = (directories) => ({
  type: DirectoryTypes.FETCH_DIRECTORY_SUCCESS,
  payload: directories,
});

const fetchDirectoryFailed = (error) => ({
  type: DirectoryTypes.FETCH_DIRECTORY_FAILED,
  payload: error,
});

export function getDirectories() {
  return (dispatch) => {
    const directoryRef = firestore.collection('directories');
    dispatch(fetchDirectoryStart());
    directoryRef.get().then((snapshot) => {
      const directories = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(fetchDirectorySuccess(directories));
    }).catch((error) => dispatch(fetchDirectoryFailed(error.message)));
  };
};
