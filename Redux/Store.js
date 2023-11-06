import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userRedusers from './Reducers'


const rootReducer = combineReducers({ userRedusers });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
