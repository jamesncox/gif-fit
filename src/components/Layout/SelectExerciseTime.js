import React, { useState } from 'react';
import { connect } from 'react-redux'
import { SET_EXERCISE_TIME } from '../../actionTypes'

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center"
    },
    button: {
        marginTop: theme.spacing(2),
        fontSize: ".9rem",
        fontFamily: "'Exo', sans-serif",
        color: "#ba68c8",
        alignSelf: "center",
        width: 235
    },
    formControl: {
        marginBottom: theme.spacing(2),
        fontFamily: "'Exo', sans-serif",
        alignSelf: "center",
        width: 100,
        textAlign: "center",
    },
}));

function SelectExerciseTime(props) {
    const classes = useStyles();
    const [time, setTime] = useState('');
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setTime(event.target.value)
        props.setExerciseTime(event.target.value)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className={classes.root}>
            <Button className={classes.button} onClick={handleOpen}>
                Choose Exercise Time
            </Button>
            <FormControl className={classes.formControl}>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={time}
                    onChange={handleChange}
                    autoWidth={true}
                >
                    <MenuItem value={20000}>20 sec</MenuItem>
                    <MenuItem value={30000}>30 sec</MenuItem>
                    <MenuItem value={40000}>40 sec</MenuItem>
                    <MenuItem value={60000}>60 sec</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setExerciseTime: (number) => dispatch({ type: SET_EXERCISE_TIME, payload: number })
})

export default connect(null, mapDispatchToProps)(SelectExerciseTime)