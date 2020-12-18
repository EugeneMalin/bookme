import { combineReducers, createStore, Store } from 'redux';
import { IStore } from '../data/interface/IStore';
import { peopleReducer } from './reducers/people';
import { userReducer } from './reducers/user';

const store: Store<IStore> = createStore(combineReducers({
    user: userReducer,
    people: peopleReducer
}));

export default store;
