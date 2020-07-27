import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

import RestTimer from '../Timer/RestTimer'
import ExerciseTimer from '../Timer/ExerciseTimer'
import StartTimer from '../Timer/StartTimer'
import DisplayGif from '../Gifs/DisplayGif'

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
    const [exerciseObj, setExerciseObj] = useState(props.exercisesAsRounds[0])

    // useEffect(() => {
    //     for (let i; i < props.exercisesAsRounds.length; i++) {
    //         console.log(props.exercisesAsRounds[i])
    //         const something = setInterval(() => setExerciseObj(props.exercisesAsRounds[i]), props.restTime + props.exerciseTime + 10000)
    //         return () => clearInterval(something)
    //     }
    // }, [setExerciseObj, props.exercisesAsRounds, props.restTime, props.exerciseTime])

    const generateWorkout = () => {
        let i = 0

        let workoutObj = props.exercisesAsRounds[i++ % props.exercisesAsRounds.length]
        setExerciseObj(workoutObj)
        setInterval(function () {
            let workoutObj = props.exercisesAsRounds[i++ % props.exercisesAsRounds.length]
            setExerciseObj(workoutObj)
        }, 10000 + props.exerciseTime)
    }

    const fireStartTimer = () => {
        const startTimer = showStartTimer === true && setTimeout(() => setShowStartTimer(false, setShowExerciseTimer(true)), 10000)
        if (showStartTimer === true) {
            return <StartTimer />
        }
        clearTimeout(startTimer)
    }

    const showTimers = () => {
        // generateWorkout()
        showRestTimer === true && setInterval(() => setShowRestTimer(false, setShowExerciseTimer(true)), props.restTime)
        showExerciseTimer === true && setInterval(() => setShowExerciseTimer(false, setShowRestTimer(true)), props.exerciseTime)

        return (
            <>
                {showRestTimer ? <RestTimer /> : null || showExerciseTimer ? <ExerciseTimer /> : null}
                {/* <DisplayGif exercise={exerciseObj} /> */}
            </>
        )
    }

    return (
        <Box className={classes.root}>
            {fireStartTimer()}
            {showTimers()}
            <DisplayGif exercise={exerciseObj} />
        </Box>
    )
}

const mapStateToProps = state => ({
    numberOfExercises: state.params.numberOfExercises,
    exerciseTime: state.params.exerciseTime,
    restTime: state.params.restTime,
    numberOfRounds: state.params.numberOfRounds,
    exercisesAsRounds: state.params.exercisesAsRounds
})

export default connect(mapStateToProps)(Workout)