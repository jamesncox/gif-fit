import React, { useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

import RestTimer from '../Timer/RestTimer'
import ExerciseTimer from '../Timer/ExerciseTimer'
import DisplayGif from '../Gifs/DisplayGif'

import data from '../../data/data.json'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        alignSelf: "center",
    },
}));

function Workout(props) {
    const classes = useStyles();
    const [showRestTimer, setShowRestTimer] = useState(true)
    const [showExerciseTimer, setShowExerciseTimer] = useState(false)

    const grabRandomExercises = () => {
        function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a.slice(0, props.numberOfExercises);
        }

        const randomExercises = shuffle(data)
        return randomExercises
    }

    let exerciseData = grabRandomExercises()

    const generateWorkout = () => {
        const exercises = grabRandomExercises()
        for (let i; i < exercises.length; i++) {
            showRestTimer === true && setInterval(() => setShowRestTimer(false, setShowExerciseTimer(true)), props.restTime);
            showExerciseTimer === true && setInterval(() => setShowExerciseTimer(false, setShowRestTimer(true)), props.exerciseTime)
            return showRestTimer ? <RestTimer /> : null || showExerciseTimer ? <ExerciseTimer /> : null && <DisplayGif props={exercises[i]} />
        }
    }

    const practiceSetTimeout = () => {
        showRestTimer === true && setInterval(() => setShowRestTimer(false, setShowExerciseTimer(true)), props.restTime);
        showExerciseTimer === true && setInterval(() => setShowExerciseTimer(false, setShowRestTimer(true)), props.exerciseTime)
        return showRestTimer ? <RestTimer /> : null || showExerciseTimer ? <ExerciseTimer /> : null
    }

    return (
        <Box className={classes.root}>
            {/* <RestTimer /> */}
            {/* <ExerciseTimer /> */}
            {/* {practiceSetTimeout()} */}
            <DisplayGif exercise={exerciseData[0]} />
            {/* {grabRandomExercises()} */}
            {/* {generateWorkout()} */}
        </Box>
    )
}

const mapStateToProps = state => ({
    numberOfExercises: state.params.numberOfExercises,
    exerciseTime: state.params.exerciseTime,
    restTime: state.params.restTime,
    numberOfRounds: state.params.numberOfRounds
})

export default connect(mapStateToProps)(Workout)