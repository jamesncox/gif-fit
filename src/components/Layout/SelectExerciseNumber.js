import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { SET_NUMBER_OF_EXERCISES } from '../../actionTypes'
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
        fontSize: ".9rem",
        fontFamily: "'Exo', sans-serif",
        color: "#ba68c8",
        marginTop: theme.spacing(2),
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

function SelectExerciseNumber(props) {
    const classes = useStyles();
    const [number, setNumber] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setNumber(event.target.value);
        props.setNumberOfExercises(event.target.value)
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
                Select Number of Exercises
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
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setNumberOfExercises: (number) => dispatch({ type: SET_NUMBER_OF_EXERCISES, payload: number })
})

export default connect(null, mapDispatchToProps)(SelectExerciseNumber)