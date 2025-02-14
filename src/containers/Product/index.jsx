import React from 'react';
import { Link } from 'react-router-dom';

import BlackText from 'components/BlackText';
import Image from 'components/Image';
import FlexWrapper from 'components/FlexWrapper';
import MarginWrapper from 'components/MarginWrapper';

import CartButton from 'containers/CartButton';
import ProductTitle from 'containers/ProductTitle';

import ProductStyled from './style';

function Product({ id, imgSrc, title, price }) {
  return (
    <ProductStyled>
      <MarginWrapper marginBottom="18px">
        <Link to="">
          <Image src={imgSrc} width="100%" height="14.24vmax" alt="상품 이미지" />
        </Link>
      </MarginWrapper>
      <FlexWrapper alignItems="center" justifyContent="center">
        <div>
          <MarginWrapper marginBottom="6px">
            <Link className="link-text" to="">
              <ProductTitle>{title}</ProductTitle>
            </Link>
          </MarginWrapper>
          <BlackText fontSize="1.25rem" fontWeight="400">
            {price.toLocaleString()}원
          </BlackText>
        </div>
        <CartButton id={id} />
      </FlexWrapper>
    </ProductStyled>
  );
}

export default Product;
