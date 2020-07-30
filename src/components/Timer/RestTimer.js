import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import UIfx from 'uifx'
import StartBeep from '../../sounds/long beep high tone.wav'
import Beep from '../../sounds/short beep medium tone.wav'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center"
    },
    header: {
        fontSize: "1.5rem",
        fontFamily: "'Exo', sans-serif",
        color: "#ce93d8"
    },
    time: {
        color: "#ce93d8",
        fontSize: "3rem"
    }
}))

function RestTimer(props) {
    const classes = useStyles()
    const [counter, setCounter] = useState(props.restTime / 1000);

    useEffect(() => {
        const interval = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(interval)
    }, [counter])

    const startBeep = new UIfx(
        StartBeep,
        {
            volume: .04,
            throttleMs: 50
        }
    )

    const playStartBeep = () => {
        startBeep.play()
    }

    const beep = new UIfx(
        Beep,
        {
            volume: .05,
            throttleMs: 50
        }
    )

    const playBeep = () => {
        beep.play()
    }

    return (
        <Box className={classes.root}>
            {counter === (props.restTime / 1000) ? playStartBeep() : null}
            {counter === 3 ? playBeep() : null}
            {counter === 2 ? playBeep() : null}
            {counter === 1 ? playBeep() : null}
            <Typography className={classes.header}>
                Rest
            </Typography>
            <Typography className={classes.time}>
                :{counter.toString().padStart(2, '0')}
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

export default connect(mapStateToProps)(RestTimer)