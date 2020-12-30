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

export const url = process.env.REACT_APP_VEAR_CLOTHING_URL;
