import {
    SET_NUMBER_OF_EXERCISES,
    SET_EXERCISE_TIME,
    SET_REST_TIME
} from '../actionTypes'

export default (state = {
    numberOfExercises: null,
    exerciseTime: null,
    restTime: null
}, action) => {
    switch (action.type) {

        case SET_NUMBER_OF_EXERCISES:
            return { ...state, numberOfExercises: action.payload }

        case SET_EXERCISE_TIME:
            return { ...state, exerciseTime: action.payload }

        case SET_REST_TIME:
            return { ...state, restTime: action.payload }

        default:
            return state
    }
}