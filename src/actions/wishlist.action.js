import {FavoActionTypes} from '../helpers/helpers';

function addProductToFavoSuccess() {
  return {
    type: FavoActionTypes.ADD_ITEM_TO_FAVO_SUCCESS,
  };
}

function addProductToFavoFailed(error) {
  return {
    type: FavoActionTypes.ADD_ITEM_TO_FAVO_FAILED,
    payload: error,
  };
}

export function addProductToWishlist(uid, data) {
  return (dispatch, getState, getFirebase) => {
    return getFirebase().firestore()
        .collection('users')
        .doc(uid)
        .collection('wishlist')
        .add(data)
        .then(() => dispatch(addProductToFavoSuccess()))
        .catch((error) => dispatch(addProductToFavoFailed(error)));
  };
}

