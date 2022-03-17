import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userReducers from './reducers/userReducers';
import {RootState} from '../utils/types';

//this is used to combine all the reducers in one place
const rootReducer = combineReducers<RootState>({userReducers});

//create the store here
const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
