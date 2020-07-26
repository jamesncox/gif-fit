import { combineReducers } from 'redux'
import params from './params'
import isActive from './isActive'


const rootReducer = combineReducers(
    {
        params,
        isActive
    }
)

export default rootReducer