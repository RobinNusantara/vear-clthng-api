import {CartActionTypes} from '../helpers/helpers';

function addProductToCartSuccess() {
  return {
    type: CartActionTypes.ADD_ITEM_TO_CART_SUCCESS,
  };
}

function addProductToCartFailed(error) {
  return {
    type: CartActionTypes.ADD_ITEM_TO_CART_FAILED,
    payload: error,
  };
}

export function addProductToCart(data) {
  return (dispatch, getState, getFirebase) => {
    const uid = getState().firebase.auth.uid;

    const cartPath = `users/${uid}/cart`;
    const cart = getState().firestore.ordered[cartPath];

    const isProductExists = cart.find((doc, index) => doc.productName === data.productName);

    if (isProductExists) return;

    return getFirebase().firestore()
        .collection('users')
        .doc(uid)
        .collection('cart')
        .add(data)
        .then(() => dispatch(addProductToCartSuccess()))
        .catch((error) => dispatch(addProductToCartFailed(error)));
  };
}

export function updateProductInCart(id, newData) {
  return (dispatch, getState, getFirebase) => {
    const uid = getState().firebase.auth.uid;
    return getFirebase().firestore()
        .collection('users')
        .doc(uid)
        .collection('cart')
        .update(newData)
        .then(() => dispatch({type: CartActionTypes.UPDATE_CART_ITEM}));
  };
}

export function removeProductFromCart(id) {
  return (dispatch, getState, getFirebase) => {
    const uid = getState().firebase.auth.uid;
    return getFirebase().firestore()
        .collection('users')
        .doc(uid)
        .collection('cart')
        .doc(id)
        .delete()
        .then(() => dispatch({type: CartActionTypes.REMOVE_ITEM_FROM_CART}));
  };
}
