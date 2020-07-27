import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

import RestTimer from '../Timer/RestTimer'
import ExerciseTimer from '../Timer/ExerciseTimer'
import StartTimer from '../Timer/StartTimer'
import DisplayGif from '../Gifs/DisplayGif'
import AllDone from '../Gifs/AllDone'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        alignSelf: "center",
    },
}));

function Workout(props) {
    const classes = useStyles()
    const [showStartTimer, setShowStartTimer] = useState(true)
    const [showExerciseTimer, setShowExerciseTimer] = useState(false)
    const [showRestTimer, setShowRestTimer] = useState(false)
    const [exerciseIndex, setExerciseIndex] = useState(0)

    useEffect(() => {
        if (exerciseIndex === 0) {
            const interval = setInterval(() => setExerciseIndex(exerciseIndex + 1), (props.exerciseTime + 10000))
            return () => clearInterval(interval)
        } else {
            const interval = setInterval(() => setExerciseIndex(exerciseIndex + 1), (props.restTime + props.exerciseTime))
            return () => clearInterval(interval)
        }
    }, [exerciseIndex, setExerciseIndex, props.exerciseTime, props.restTime])

    // const generateWorkout = () => {
    //     if (exerciseIndex === 0) {
    //         const interval = setInterval(() => setExerciseIndex(exerciseIndex + 1), props.exerciseTime + 10000)
    //         return () => clearInterval(interval)
    //     } else {
    //         const interval = setInterval(() => setExerciseIndex(exerciseIndex + 1), props.exerciseTime + props.restTime)
    //         return () => clearInterval(interval)
    //     }
    // }

    const fireStartTimer = () => {
        const startTimer = showStartTimer === true && setInterval(() => setShowStartTimer(false, setShowExerciseTimer(true)), 10000)
        if (showStartTimer === true) {
            return <StartTimer />
        }
        clearInterval(startTimer)
    }

    const showTimers = () => {
        const restTimer = showRestTimer === true && setInterval(() => setShowRestTimer(false, setShowExerciseTimer(true)), props.restTime)
        const exerciseTimer = showExerciseTimer === true && setInterval(() => setShowExerciseTimer(false, setShowRestTimer(true)), props.exerciseTime)

        if (exerciseIndex > props.exercisesAsRounds.lastIndexOf(props.exercisesAsRounds[props.exercisesAsRounds.length - 1])) {
            clearInterval(restTimer, exerciseTimer)
        }

        if (exerciseIndex > props.exercisesAsRounds.lastIndexOf(props.exercisesAsRounds[props.exercisesAsRounds.length - 1])) {
            return (
                null
            )
        } else {
            return (
                showRestTimer ? <RestTimer /> : null || showExerciseTimer ? <ExerciseTimer /> : null
            )
        }
    }

    if (exerciseIndex > props.exercisesAsRounds.lastIndexOf(props.exercisesAsRounds[props.exercisesAsRounds.length - 1])) {
        return (
            <Box className={classes.root}>
                <AllDone />
            </Box>
        )
    } else {
        return (
            <Box className={classes.root}>
                {/* {generateWorkout()} */}
                {fireStartTimer()}
                {showTimers()}
                <DisplayGif exercise={props.exercisesAsRounds[exerciseIndex]} />
            </Box>
        )
    }
}

const mapStateToProps = state => ({
    numberOfExercises: state.params.numberOfExercises,
    exerciseTime: state.params.exerciseTime,
    restTime: state.params.restTime,
    numberOfRounds: state.params.numberOfRounds,
    exercisesAsRounds: state.params.exercisesAsRounds
})

export default connect(mapStateToProps)(Workout)