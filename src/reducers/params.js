import {
    SET_NUMBER_OF_EXERCISES,
    SET_EXERCISE_TIME,
    SET_REST_TIME,
    SET_NUMBER_OF_ROUNDS,
    CLEAR_PARAMS,
    SET_EXERCISES
} from '../actionTypes'

import data from '../data/data.json'

export default (state = {
    numberOfExercises: null,
    exerciseTime: null,
    restTime: null,
    numberOfRounds: null,
    exercises: []
}, action) => {
    switch (action.type) {

        case SET_NUMBER_OF_EXERCISES:
            return { ...state, numberOfExercises: action.payload }

        case SET_EXERCISE_TIME:
            return { ...state, exerciseTime: action.payload }

        case SET_REST_TIME:
            return { ...state, restTime: action.payload }

        case SET_NUMBER_OF_ROUNDS:
            return { ...state, numberOfRounds: action.payload }

        case CLEAR_PARAMS:
            return { ...state, numberOfExercises: null, exerciseTime: null, restTime: null, numberOfRounds: null, exercises: [] }

        case SET_EXERCISES:
            function shuffle(a) {
                for (let i = a.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [a[i], a[j]] = [a[j], a[i]];
                }
                return a.slice(0, state.numberOfExercises);
            }

            const randomExercises = shuffle(data)
            return { ...state, exercises: randomExercises }

        default:
            return state
    }
}