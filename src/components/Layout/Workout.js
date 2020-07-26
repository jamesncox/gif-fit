import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

import RestTimer from '../Timer/RestTimer'
import ExerciseTimer from '../Timer/ExerciseTimer'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center"
    },
}));

function Workout(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <RestTimer />
            <ExerciseTimer />
        </Box>
    )
}

const mapStateToProps = state => ({
    numberOfExercises: state.params.numberOfExercises,
    exerciseTime: state.params.exerciseTime,
    restTime: state.params.restTime,
    numberOfRounds: state.params.numberOfRounds
})

export default connect(mapStateToProps)(Workout)