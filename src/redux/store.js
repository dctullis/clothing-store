import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger';

import rootReducer from './root-reducer'

const middlewares = [logger];

//the store is being created with root reducer and it is recieving all of the items in the middlewares
//array. (by default it only receives a logger)
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;