import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ProductListStyled from './style';
import StateMessage from 'containers/StateMessage';

import MESSAGE from 'constants';
import { useGetProductList } from 'hooks/useDataFetch';
import Product from 'containers/Product';
import Pagination from 'components/Pagination';

function ProductList() {
  const products = useSelector((state) => state.product.products);
  const isLoading = useSelector((state) => state.product.isLoading);
  const isError = useSelector((state) => state.product.isError);
  const pagePosition = useSelector((state) => state.page.pagePosition);
  const limit = useSelector((state) => state.page.limit);
  const productIndex = (pagePosition - 1) * limit;

  const productsList = useGetProductList();

  useEffect(() => {
    productsList();
  }, []);

  if (isLoading) {
    return <StateMessage message={MESSAGE.LOADING} />;
  }

  if (isError) {
    return <StateMessage message={MESSAGE.ERROR} />;
  }
  return (
    <>
      <ProductListStyled>
        {products.slice(productIndex, productIndex + limit).map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ProductListStyled>
      <Pagination />
    </>
  );
}

export default ProductList;
