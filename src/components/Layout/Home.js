import React from 'react'
import { connect } from 'react-redux'
import Title from './Title'
import Subtitle from './Subtitle'
import MoreInfoButton from './MoreInfoButton'
import SelectExerciseNumber from './SelectExerciseNumber'
import SelectExerciseTime from './SelectExerciseTime'
import SelectRestTime from './SelectRestTime'
import StartWorkout from './StartWorkout'
import DisplayTotalTime from './DisplayTotalTime'
import SelectRoundNumber from './SelectRoundNumber'
import StopWorkout from './StopWorkout'
import RestTimer from '../Timer/RestTimer'
import ExerciseTimer from '../Timer/ExerciseTimer'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        fontFamily: "'Nanum Pen Script', cursive",
    },
}));


function Home(props) {
    const classes = useStyles();

    if (props.isActive === true) {
        return (
            <div className={classes.root}>
                <Title />
                <RestTimer />
                <ExerciseTimer />
                <StopWorkout />
            </div>
        )
    } else {
        return (
            <div className={classes.root}>
                <Title />
                <Subtitle />
                <MoreInfoButton />
                <SelectExerciseNumber />
                <SelectExerciseTime />
                <SelectRestTime />
                <SelectRoundNumber />
                {props.restTime && props.numberOfExercises && props.exerciseTime && props.numberOfRounds ? <StartWorkout /> : null}
                {props.restTime && props.numberOfExercises && props.exerciseTime && props.numberOfRounds ? <DisplayTotalTime /> : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    numberOfExercises: state.params.numberOfExercises,
    exerciseTime: state.params.exerciseTime,
    restTime: state.params.restTime,
    numberOfRounds: state.params.numberOfRounds,
    isActive: state.isActive.isActive
})

export default connect(mapStateToProps)(Home)