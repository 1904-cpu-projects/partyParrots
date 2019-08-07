import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [ thunk ];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware( ...middleware )
)

console.log('store: ', store.getState());

export default store;