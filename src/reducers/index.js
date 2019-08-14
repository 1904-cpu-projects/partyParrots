import { combineReducers } from 'redux';
import beverageReducer from './beverageReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    beverages: beverageReducer,
    cart: cartReducer,
    user: userReducer,
})

export default rootReducer;