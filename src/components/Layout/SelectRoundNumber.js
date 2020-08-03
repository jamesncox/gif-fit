import React, { useState } from 'react';
import { connect } from 'react-redux'
import {
    SET_NUMBER_OF_ROUNDS,
    SET_EXERCISE_ROUNDS,
} from '../../actionTypes'
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
        fontFamily: "'Exo', sans-serif",
        alignSelf: "center",
        width: 50,
        textAlign: "center"
    },
}));

function SelectRoundNumber(props) {
    const classes = useStyles();
    const [number, setNumber] = useState('');
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setNumber(event.target.value);
        props.setNumberOfRounds(event.target.value)
        props.setExerciseRounds()
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
                Choose Number of Rounds
            </Button>
            <FormControl className={classes.formControl}>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={number}
                    onChange={handleChange}
                    autoWidth={true}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setNumberOfRounds: (number) => dispatch({ type: SET_NUMBER_OF_ROUNDS, payload: number }),
    setExerciseRounds: () => dispatch({ type: SET_EXERCISE_ROUNDS })
})

export default connect(null, mapDispatchToProps)(SelectRoundNumber)