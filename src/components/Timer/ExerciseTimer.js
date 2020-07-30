import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Beep from '../Audio/Beep'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center"
    },
    header: {
        fontSize: "1.5rem",
        fontFamily: "'Exo', sans-serif",
        color: "#7e57c2"
    },
    time: {
        color: "#7e57c2",
        fontSize: "3rem"
    }
}))

function ExerciseTimer(props) {
    const classes = useStyles()
    const [counter, setCounter] = useState(props.exerciseTime / 1000)

    useEffect(() => {
        const interval = counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
        return () => clearInterval(interval)
    }, [counter])

    return (
        <Box className={classes.root}>
            <Beep />
            <Typography className={classes.header}>
                WORK OUT!
            </Typography>
            <Typography className={classes.time}>
                {Math.floor(counter / 60).toString()}:{(counter % 60).toString().padStart(2, '0')}
            </Typography>
        </Box>
    )
}

const mapStateToProps = state => ({
    numberOfExercises: state.params.numberOfExercises,
    exerciseTime: state.params.exerciseTime,
    restTime: state.params.restTime,
    numberOfRounds: state.params.numberOfRounds
})

export default connect(mapStateToProps)(ExerciseTimer)