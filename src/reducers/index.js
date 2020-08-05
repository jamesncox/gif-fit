import { combineReducers } from 'redux'
import params from './params'
import isActive from './isActive'
import successGif from './successGif'


const rootReducer = combineReducers(
    {
        params,
        isActive,
        successGif
    }
)

export default rootReducer