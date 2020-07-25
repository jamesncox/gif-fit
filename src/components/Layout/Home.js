import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import MoreInfoButton from './MoreInfoButton'
import SelectExerciseNumber from './SelectExerciseNumber'
import SelectExerciseTime from './SelectExerciseTime'
import SelectRestTime from './SelectRestTime'
import StartWorkout from './StartWorkout'
import DisplayTotalTime from './DisplayTotalTime'

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

    return (
        <div className={classes.root}>
            <Title />
            <Subtitle />
            <MoreInfoButton />
            <SelectExerciseNumber />
            <SelectExerciseTime />
            <SelectRestTime />
            <StartWorkout />
            <DisplayTotalTime />
        </div>
    )
}

export default Home