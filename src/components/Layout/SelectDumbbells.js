import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    INCLUDE_DUMBBELLS,
    EXCLUDE_DUMBBELLS,
    SET_EXERCISES,
    SET_EXERCISE_ROUNDS
} from '../../actionTypes'
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center"
    },
    checkbox: {
        marginTop: theme.spacing(2),
        fontFamily: "'Exo', sans-serif",
        color: "#ba68c8",
        alignSelf: "center",
    },
    label: {
        fontSize: ".9rem",
        fontFamily: "'Exo', sans-serif",
        color: "#ba68c8",
    }
}));

const PurpleCheckBox = withStyles({
    root: {
        color: deepPurple[300],
        '&$checked': {
            color: deepPurple[400],
        },
    },
    checked: {},
})((props) => <Checkbox style={{ fontSize: ".1rem" }} color="default" {...props} />);

function SelectDumbbells(props) {
    const classes = useStyles();
    const [state, setState] = useState({
        checked: false,
    })

    const handleChange = (event) => {
        setState({ ...state, checked: event.target.checked })
        console.log(state.checked)
        if (state.checked === false) {
            props.includeDumbbells()
            props.setExercises()
            props.setExerciseRounds()
        } else {
            props.excludeDummbells()
            props.setExercises()
            props.setExerciseRounds()
        }
    };

    return (
        <FormGroup row className={classes.root}>
            <FormControlLabel
                className={classes.checkbox}
                control={<PurpleCheckBox checked={state.checked} onChange={handleChange} name="checked" />}
                label={<Typography className={classes.label}>INCLUDE DUMBBELLS?</Typography>}
            />
        </FormGroup>
    );
}

const mapDispatchToProps = dispatch => ({
    includeDumbbells: () => dispatch({ type: INCLUDE_DUMBBELLS }),
    excludeDummbells: () => dispatch({ type: EXCLUDE_DUMBBELLS }),
    setExercises: () => dispatch({ type: SET_EXERCISES }),
    setExerciseRounds: () => dispatch({ type: SET_EXERCISE_ROUNDS }),
})

export default connect(null, mapDispatchToProps)(SelectDumbbells)