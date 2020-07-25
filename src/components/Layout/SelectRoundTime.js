import React from 'react';
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

export default function SelectRoundTime() {
    const classes = useStyles();
    const [time, setTime] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setTime(event.target.value);
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
                Select Length of Rounds
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
                    <MenuItem value={30}>30 sec</MenuItem>
                    <MenuItem value={45}>45 sec</MenuItem>
                    <MenuItem value={60}>60 sec</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}