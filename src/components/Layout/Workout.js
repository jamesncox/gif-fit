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

    // Set the intervals for displaying each gif index based on exercise and rest times
    useEffect(() => {
        if (exerciseIndex === 0) {
            const interval = setInterval(() => setExerciseIndex(exerciseIndex + 1), (props.exerciseTime + 10000))
            return () => clearInterval(interval)
        } else {
            const interval = setInterval(() => setExerciseIndex(exerciseIndex + 1), (props.restTime + props.exerciseTime))
            return () => clearInterval(interval)
        }
    }, [exerciseIndex, setExerciseIndex, props.exerciseTime, props.restTime])

    // Display the initial start timer and set to false when 10 seconds is over, set exercise timer to true
    // useEffect(() => {
    //     const startTimer = showStartTimer === true && setInterval(() => setShowStartTimer(false, setShowExerciseTimer(true)), 10000)
    //     return () => clearInterval(startTimer)
    // })

    // Display the exercise timer and set it to false when exercise time is complete, set rest timer to true
    useEffect(() => {
        const exerciseTimer = showExerciseTimer === true && setInterval(() => setShowExerciseTimer(false, setShowRestTimer(true)), props.exerciseTime)
        return () => clearInterval(exerciseTimer)
    })

    // Display the rest timer and set it to false when rest time is complete, set exercise back to true
    useEffect(() => {
        const restTimer = showRestTimer === true && setInterval(() => setShowRestTimer(false, setShowExerciseTimer(true)), props.restTime)
        return () => clearInterval(restTimer)
    })

    const fireStartTimer = () => {
        const startTimer = showStartTimer === true && setTimeout(() => setShowStartTimer(false, setShowExerciseTimer(true)), 10000)
        if (showStartTimer === true) {
            return <StartTimer />
        }
        clearTimeout(startTimer)
    }

    // const fireExerciseTimer = () => {
    //     const exerciseTimer = showExerciseTimer === true && setInterval(() => setShowExerciseTimer(false, setShowRestTimer(true)), props.exerciseTime)
    //     if (showExerciseTimer === true) {
    //         return <ExerciseTimer />
    //     }
    //     clearTimeout(exerciseTimer)
    // }

    // const fireRestTimer = () => {
    //     const restTimer = showRestTimer === true && setInterval(() => setShowRestTimer(false, setShowExerciseTimer(true)), props.restTime)
    //     if (showRestTimer === true) {
    //         return <RestTimer />
    //     }
    //     clearTimeout(restTimer)
    // }

    if (exerciseIndex > props.exercisesAsRounds.lastIndexOf(props.exercisesAsRounds[props.exercisesAsRounds.length - 1])) {
        return (
            <Box className={classes.root}>
                <AllDone />
            </Box>
        )
    } else {
        return (
            <Box className={classes.root}>
                {fireStartTimer()}
                {/* {fireExerciseTimer()} */}
                {/* {fireRestTimer()} */}
                {/* {showStartTimer ? <StartTimer /> : null} */}
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