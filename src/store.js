import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';
import rootReducer from './reducers';

const middleware = [logger, thunk.withExtraArgument(axios)];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
