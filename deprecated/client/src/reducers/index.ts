import { combineReducers } from 'redux'
import {reducer as userReducer} from './user'
import {reducer as personsReducer} from './persons'
import {reducer as tabReducer} from './tab'

const reducers = combineReducers({
    user: userReducer,
    persons: personsReducer,
    tabId: tabReducer
})

export default reducers;
