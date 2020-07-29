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

    // Set the intervals for increasing gif index based on exercise and rest times
    useEffect(() => {
        if (exerciseIndex === 0) {
            const interval = setInterval(() => setExerciseIndex(exerciseIndex + 1), (props.exerciseTime + 10000))
            return () => clearInterval(interval)
        } else {
            const interval = setInterval(() => setExerciseIndex(exerciseIndex + 1), (props.restTime + props.exerciseTime))
            return () => clearInterval(interval)
        }
    }, [exerciseIndex, setExerciseIndex, props.exerciseTime, props.restTime])

    // Set start timer to false when 10 seconds is over, set exercise timer to true
    useEffect(() => {
        const startTimer = showStartTimer && setInterval(() => setShowStartTimer(false, setShowExerciseTimer(true)), 10000)
        return () => clearInterval(startTimer)
    })

    // Set exercise timer false when props.exerciseTime is complete, set rest timer to true
    useEffect(() => {
        const exerciseTimer = showExerciseTimer && setInterval(() => setShowExerciseTimer(false, setShowRestTimer(true)), props.exerciseTime)
        return () => clearInterval(exerciseTimer)
    }, [showExerciseTimer, setShowExerciseTimer, setShowRestTimer, props.exerciseTime])

    // Set rest timer to false when props.restTime is complete, set exercise timer back to true
    useEffect(() => {
        const restTimer = showRestTimer && setInterval(() => setShowRestTimer(false, setShowExerciseTimer(true)), props.restTime)
        return () => clearInterval(restTimer)
    }, [showRestTimer, setShowRestTimer, setShowExerciseTimer, props.restTime])

    if (exerciseIndex > props.exercisesAsRounds.lastIndexOf(props.exercisesAsRounds[props.exercisesAsRounds.length - 1])) {
        return (
            <Box className={classes.root}>
                <AllDone />
            </Box>
        )
    } else {
        return (
            <Box className={classes.root}>
                {showStartTimer ? <StartTimer /> : null}
                {showExerciseTimer ? <ExerciseTimer /> : null}
                {showRestTimer ? <RestTimer /> : null}
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