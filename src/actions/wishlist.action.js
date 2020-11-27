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

export function addProductToWishlist(data) {
  return (dispatch, getState, getFirebase) => {
    const uid = getState().firebase.auth.uid;

    const wishlistPath = `users/${uid}/wishlist`;
    const cart = getState().firestore.ordered[wishlistPath];

    const isProductExists = cart.find((doc, index) => doc.productName === data.productName);

    if (isProductExists) return;

    return getFirebase().firestore()
        .collection('users')
        .doc(uid)
        .collection('wishlist')
        .add(data)
        .then(() => dispatch(addProductToFavoSuccess()))
        .catch((error) => dispatch(addProductToFavoFailed(error)));
  };
}

export function removeProductFromWishlist(id) {
  return (dispatch, getState, getFirebase) => {
    const uid = getState().firebase.auth.uid;
    return getFirebase().firestore()
        .collection('users')
        .doc(uid)
        .collection('wishlist')
        .doc(id)
        .delete()
        .then(() => dispatch({type: FavoActionTypes.REMOVE_ITEM_FROM_FAVO}));
  };
}
