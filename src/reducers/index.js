import { combineReducers } from 'redux'
import { contactReducer }from './contactReducers'

const rootReducer= combineReducers({
    contacts:contactReducer,
})

export default rootReducer;