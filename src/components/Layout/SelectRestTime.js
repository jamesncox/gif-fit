import React, { useState } from 'react';
import { connect } from 'react-redux'
import { SET_REST_TIME } from '../../actionTypes'
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
        width: 100,
        textAlign: "center"
    },
}));

function SelectRestTime(props) {
    const classes = useStyles();
    const [time, setTime] = useState('');
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setTime(event.target.value);
        props.setRestTime(event.target.value)
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
                Select Rest Time
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
                    <MenuItem value={10000}>10 sec</MenuItem>
                    <MenuItem value={15000}>15 sec</MenuItem>
                    <MenuItem value={20000}>20 sec</MenuItem>
                    <MenuItem value={30000}>30 sec</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setRestTime: (number) => dispatch({ type: SET_REST_TIME, payload: number })
})

export default connect(null, mapDispatchToProps)(SelectRestTime)