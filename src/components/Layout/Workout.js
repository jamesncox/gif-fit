import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import RestTimer from '../Timer/RestTimer'
import ExerciseTimer from '../Timer/ExerciseTimer'
import StartTimer from '../Timer/StartTimer'
import DisplayGif from '../Gifs/DisplayGif'
import AllDone from '../Gifs/AllDone'
import Title from './Title'
import ReactNoSleep from 'react-no-sleep'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        alignSelf: "center",
    },
    awake: {
        marginTop: theme.spacing(2),
        color: "#7e57c2",
        fontFamily: "'Exo', sans-serif",
    },
    button: {
        color: "#7e57c2",
        fontFamily: "'Exo', sans-serif",
    },
    title: {
        alignSelf: "center",
        fontSize: "3rem",
        fontWeight: "bold",
        fontFamily: "'Exo', sans-serif",
        top: theme.spacing(1),
        color: "#ba68c8"
    },
}));

function Workout(props) {
    const classes = useStyles()
    const [showStartTimer, setShowStartTimer] = useState(true)
    const [showExerciseTimer, setShowExerciseTimer] = useState(false)
    const [showRestTimer, setShowRestTimer] = useState(false)
    const [exerciseIndex, setExerciseIndex] = useState(0)
    const [round, setRound] = useState(1)
    const [flag, setFlag] = useState(false)

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

    useEffect(() => {
        if (props.numberOfRounds === 1) {
            setRound(1)
            setFlag(false)
        } else if ((exerciseIndex + 1) % props.numberOfExercises === 0 && flag === false) {
            setRound(round + 1)
            setFlag(true)
        } else if ((exerciseIndex) % props.numberOfExercises === 0 && flag === true) {
            setFlag(false)
        }
    }, [flag, setFlag, round, setRound, exerciseIndex, props.numberOfRounds, props.numberOfExercises])

    if (exerciseIndex > props.exercisesAsRounds.lastIndexOf(props.exercisesAsRounds[props.exercisesAsRounds.length - 1])) {
        return (
            <Box className={classes.root}>
                <Title />
                <AllDone />
            </Box>
        )
    } else {
        return (
            <Box className={classes.root}>
                <Typography className={classes.title}>
                    Round {round}
                </Typography>
                {showStartTimer ? <StartTimer /> : null}
                {showExerciseTimer ? <ExerciseTimer /> : null}
                {showRestTimer ? <RestTimer /> : null}
                <DisplayGif exercise={props.exercisesAsRounds[exerciseIndex]} />
                <Typography className={classes.awake}>KEEP SCREEN AWAKE?</Typography>
                <ReactNoSleep>
                    {({ isOn, enable, disable }) => (
                        <Button className={classes.button} onClick={isOn ? disable : enable} >
                            {isOn ? <CheckCircleIcon /> : <HighlightOffIcon />}
                        </Button>
                    )}
                </ReactNoSleep>
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