import { combineReducers } from 'redux'
import {reducer as userReducer} from './user'
import {reducer as personsReducer} from './persons'

const reducers = combineReducers({
    user: userReducer,
    persons: personsReducer
})

export default reducers;
