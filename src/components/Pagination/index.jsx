import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestPageMove } from 'modules/page';

import PaginationStyled from './style';

function Pagination() {
  const productsNumber = useSelector((state) => state.product.products).length;
  const limit = useSelector((state) => state.page.limit);
  const pagePosition = useSelector((state) => state.page.pagePosition);
  const pagesNumber = Math.ceil(productsNumber / limit);

  const dispatch = useDispatch();

  const handleClickButton = (event) => {
    const clickedPageNumber = Number(event.target.innerText);
    dispatch(requestPageMove(clickedPageNumber));
  };

  const handlePrevButton = () => {
    dispatch(requestPageMove(pagePosition - 1));
  };

  const handleNextButton = () => {
    dispatch(requestPageMove(pagePosition + 1));
  };
  return (
    <PaginationStyled>
      <button onClick={handlePrevButton} disabled={pagePosition === 1}>
        ᐸ
      </button>
      {Array.from({ length: pagesNumber }, (value, idx) => {
        const pageNumber = idx + 1;

        return (
          <button
            key={idx}
            onClick={handleClickButton}
            className={pageNumber === pagePosition ? 'active' : ''}
          >
            {pageNumber}
          </button>
        );
      })}
      <button onClick={handleNextButton} disabled={pagePosition === pagesNumber}>
        ᐳ
      </button>
    </PaginationStyled>
  );
}

export default Pagination;
