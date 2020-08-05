import {
    SET_SUCCESS_GIF
} from '../actionTypes'

import successMessage from '../data/successMessage.json'

export default (state = {
    successGif: []
}, action) => {
    switch (action.type) {

        case SET_SUCCESS_GIF:
            function shuffle(a) {
                for (let i = a.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [a[i], a[j]] = [a[j], a[i]];
                }
                return a.slice(0, 1);
            }

            const randomGif = shuffle(successMessage)
            console.log(randomGif)
            return { ...state, successGif: randomGif }

        default:
            return state
    }
}