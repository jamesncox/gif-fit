import React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        textAlign: "center"
    },
    header: {
        fontSize: "1.2rem",
        fontFamily: "'Exo', sans-serif",
        color: "#ba68c8"
    },
    time: {
        color: "#7e57c2",
        fontSize: "2rem"
    }
}))

function DisplayTotalTime(props) {
    const classes = useStyles();

    const calculateTotalTime = () => {
        let numberOfExercises = props.numberOfExercises
        let numberOfRounds = props.numberOfRounds
        let exerciseTime = props.exerciseTime / 1000
        let restTime = props.restTime / 1000

        let totalTime = (exerciseTime + restTime) * numberOfExercises * numberOfRounds
        let minutes = Math.floor(totalTime / 60)
        let seconds = totalTime % 60
        let formatted = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        return formatted
    }

    return (
        <Box className={classes.root}>
            <Typography className={classes.header}>
                Total Workout Time
            </Typography>
            <Typography className={classes.time}>
                {calculateTotalTime()}
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

export default connect(mapStateToProps)(DisplayTotalTime)