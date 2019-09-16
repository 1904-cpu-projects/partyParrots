import { combineReducers } from 'redux';
import beverageReducer from './beverageReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import transactionsReducer from './transactionsReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  beverages: beverageReducer,
  cart: cartReducer,
  user: userReducer,
  transactions: transactionsReducer,
  ui: uiReducer,
});

export default rootReducer;
