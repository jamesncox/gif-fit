import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
// import UIfx from 'uifx'
// import StartBeep from '../../sounds/triple start beep.wav'
// import Beep from '../../sounds/very short beep low.wav'

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
        fontSize: "3rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: "4rem",
        },
    }
}))

function ExerciseTimer(props) {
    const classes = useStyles()
    const [counter, setCounter] = useState(props.exerciseTime / 1000)

    useEffect(() => {
        const interval = counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
        return () => clearInterval(interval)
    }, [counter])

    // const startBeep = new UIfx(
    //     StartBeep,
    //     {
    //         volume: 1,
    //         throttleMs: 50
    //     }
    // )

    // const beep = new UIfx(
    //     Beep,
    //     {
    //         volume: 1,
    //         throttleMs: 50
    //     }
    // )

    // const playStartBeep = () => {
    //     startBeep.play()
    // }

    // const playBeep = () => {
    //     beep.play()
    // }

    // useEffect(() => {
    //     if (counter === 3) beep.play()
    //     if (counter === 2) beep.play()
    //     if (counter === 1) beep.play()
    // }, [counter, beep])

    return (
        <Box className={classes.root}>
            {/* {counter === (props.exerciseTime / 1000) ? playStartBeep() : null} */}
            {/* {counter === 3 ? playBeep() : null} */}
            {/* {counter === 2 ? playBeep() : null} */}
            {/* {counter === 1 ? playBeep() : null} */}
            <Typography className={classes.header}>
                WORK OUT!
            </Typography>
            <Typography className={classes.time}>
                {/* {counter === 60 ? `${Math.floor(counter / 60).toString()}:${(counter % 60).toString().padStart(2, '0')}` : `:${(counter % 60).toString().padStart(2, '0')}`} */}
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

export default connect(mapStateToProps)(ExerciseTimer)