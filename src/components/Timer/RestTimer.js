import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

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

    return (
        <Box className={classes.root}>
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