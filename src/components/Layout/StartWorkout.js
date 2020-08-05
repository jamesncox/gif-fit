import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
    IS_ACTIVE_TRUE,
    SET_SUCCESS_GIF
} from '../../actionTypes'
import Button from '@material-ui/core/Button';
import { deepPurple } from '@material-ui/core/colors';
import { connect } from 'react-redux';

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

function StartWorkout(props) {
    const classes = useStyles();

    const handleClick = () => {
        props.isActiveTrue()
        props.setSuccessGif()
    }

    return (
        <div className={classes.root}>
            <ColorButton
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleClick}
            >
                Start Workout
            </ColorButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    isActiveTrue: () => dispatch({ type: IS_ACTIVE_TRUE }),
    setSuccessGif: () => dispatch({ type: SET_SUCCESS_GIF })
})

export default connect(null, mapDispatchToProps)(StartWorkout)