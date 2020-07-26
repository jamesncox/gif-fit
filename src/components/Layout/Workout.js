import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

import RestTimer from '../Timer/RestTimer'
import ExerciseTimer from '../Timer/ExerciseTimer'
import DisplayGif from '../Gifs/DisplayGif'

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
    // const [exercise, setExercise] = useState(null)

    // useEffect(() => {
    //     for (let i; i < props.exercises.length; i++) {
    //         showRestTimer === true && setInterval(() => setShowRestTimer(false, setShowExerciseTimer(true)), props.restTime);
    //         showExerciseTimer === true && setInterval(() => setShowExerciseTimer(false, setShowRestTimer(true)), props.exerciseTime)
    //         setGenerateWorkout(
    //             <>
    //                 {showRestTimer ? <RestTimer /> : null || showExerciseTimer ? <ExerciseTimer /> : null}
    //                 <DisplayGif exercise={props.exercises[i]} />
    //             </>
    //         )
    //     }
    // }, [generateWorkout, props.exercises, props.restTime, props.exerciseTime, showExerciseTimer, showRestTimer])

    const generateWorkout = () => {
        for (let i; i < props.exercises.length; i++) {
            showRestTimer === true && setInterval(() => setShowRestTimer(false, setShowExerciseTimer(true)), props.restTime);
            showExerciseTimer === true && setInterval(() => setShowExerciseTimer(false, setShowRestTimer(true)), props.exerciseTime)
            return (
                <>
                    {showRestTimer ? <RestTimer /> : null || showExerciseTimer ? <ExerciseTimer /> : null}
                    <DisplayGif exercise={props.exercises[i]} />
                </>
            )
        }
    }

    const practiceSetTimeout = () => {
        showRestTimer === true && setInterval(() => setShowRestTimer(false, setShowExerciseTimer(true)), props.restTime);
        showExerciseTimer === true && setInterval(() => setShowExerciseTimer(false, setShowRestTimer(true)), props.exerciseTime)
        return (
            <>
                {showRestTimer ? <RestTimer /> : null || showExerciseTimer ? <ExerciseTimer /> : null}
                <DisplayGif exercise={props.exercises[0]} />
            </>
        )
    }

    return (
        <Box className={classes.root}>
            {practiceSetTimeout()}
            {/* {generateWorkout()} */}
        </Box>
    )
}

const mapStateToProps = state => ({
    numberOfExercises: state.params.numberOfExercises,
    exerciseTime: state.params.exerciseTime,
    restTime: state.params.restTime,
    numberOfRounds: state.params.numberOfRounds,
    exercises: state.params.exercises
})

export default connect(mapStateToProps)(Workout)