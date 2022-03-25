import { combineReducers } from 'redux'
import { authenticationReducer } from '../authentication/reducer'
import { pointReducer } from '../point/reducer'

export const rootReducer = combineReducers({
    authenticationReducer: authenticationReducer,
    pointReducer: pointReducer
})
