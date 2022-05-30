import { combineReducers } from 'redux';
import product from './product';
import cart from './cart';
import page from './page';

const rootReducer = combineReducers({
  product,
  cart,
  page,
});

export default rootReducer;
