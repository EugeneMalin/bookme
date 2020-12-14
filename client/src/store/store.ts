import { combineReducers, createStore, Store } from 'redux';
import { IStore } from '../data/interface/IStore';
import { userReducer } from './reducers/user';

const store: Store<IStore> = createStore(combineReducers({
    user: userReducer, 
}));

export default store;
