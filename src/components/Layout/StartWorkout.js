import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { deepPurple } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[400],
        '&:hover': {
            backgroundColor: deepPurple[600],
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",

    },
    button: {
        marginTop: theme.spacing(6),
        alignSelf: "center",
        width: 200
    },
}));

export default function StartWorkout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ColorButton variant="contained" color="primary" className={classes.button}>
                Start Workout!
            </ColorButton>
        </div>
    );
}