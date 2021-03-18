import { combineReducers } from 'redux'
import {reducer as userReducer} from './user'

const reducers = combineReducers({
    user: userReducer
})

export default reducers;
