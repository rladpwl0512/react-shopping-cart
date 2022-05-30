const initialState = {
  pagePosition: 1,
  limit: 10,
};

const REQUEST_PAGE_MOVE = 'REQUEST_PAGE_MOVE';

export const requestPageMove = (pageNumber) => ({ type: REQUEST_PAGE_MOVE, pageNumber });

export default function page(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PAGE_MOVE:
      return {
        ...state,
        pagePosition: action.pageNumber,
      };

    default:
      return state;
  }
}
