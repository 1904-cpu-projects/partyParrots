import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import loggerMiddleware from 'redux-logger';

const initialState = {};
const middleware = [ loggerMiddleware, thunk ];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware( ...middleware )
)

console.log('store: ', store.getState());

export default store;
