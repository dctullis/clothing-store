import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer'

const middlewares = [logger];

//the store is being created with root reducer and it is recieving all of the items in the middlewares
//array. (by default it only receives a logger)
export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store);

export default {store, persistor};