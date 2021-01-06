export function formatPrice(data) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'}).format(data);
}

export function totalPrice(data) {
  return data.reduce((acc, val) => {
    const {productQuantity} = val;
    const {productPrice} = val.collection;
    return acc + productQuantity * productPrice;
  }, 0);
}

export const errorMessage = (error) => error.length === 0;

export function actionError(error, user, message) {
  if (error.length === 0) {
    return `Successfully added this product to your ${message}!`;
  } else {
    if (user) {
      return `This product already in your ${message}!`;
    } else {
      return 'You must be logged in to do this action';
    }
  }
}

export const url = process.env.REACT_APP_VEAR_CLOTHING_URL;
