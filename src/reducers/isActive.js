import {
    IS_ACTIVE_TRUE,
    IS_ACTIVE_FALSE
} from '../actionTypes'

export default (state = {
    isActive: false
}, action) => {
    switch (action.type) {

        case IS_ACTIVE_TRUE:
            return { ...state, isActive: true }

        case IS_ACTIVE_FALSE:
            return { ...state, isActive: false }

        default:
            return state
    }
}