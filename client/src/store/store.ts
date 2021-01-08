import { combineReducers, createStore, Store } from 'redux';
import { IStore } from '../data/interface/IStore';
import { systemReducer } from './system/reducer';

const store: Store<IStore> = createStore(combineReducers({
    system: systemReducer
}));

export default store;
