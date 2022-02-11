import { combineReducers } from "redux"
import databaseReducer from './database'
import userReducer from './user'
export default combineReducers({
    database : databaseReducer,
    user: userReducer
})