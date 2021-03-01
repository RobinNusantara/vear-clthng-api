import React, {Fragment, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {fetchProduct, destroyProductsState} from '../../actions/products.action';

function ProductPage() {
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(id));
    return () => dispatch(destroyProductsState());
  }, [dispatch, id]);

  return (
    <Fragment>
    </Fragment>
  );
}

export default ProductPage;
