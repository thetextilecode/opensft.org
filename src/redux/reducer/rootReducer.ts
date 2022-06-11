import { combineReducers } from 'redux';
import products from './product';
import resources from './resource';
import cart from './cart';
import wishlist from './wishlist';
import quickView from './quickView';
import compare from './compare';
import productFilters from './productFilters';
import resourceFilters from './resourceFilters';

const rootReducer = combineReducers({
  products,
  resources,
  cart,
  wishlist,
  quickView,
  compare,
  productFilters,
  resourceFilters,
});

export default rootReducer;
