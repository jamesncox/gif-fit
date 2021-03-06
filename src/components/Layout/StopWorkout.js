import React from 'react'
import { connect } from 'react-redux'
import {
    IS_ACTIVE_FALSE,
    CLEAR_PARAMS
} from '../../actionTypes'

import { withStyles, makeStyles } from '@material-ui/core/styles'
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

function StartWorkout(props) {
    const classes = useStyles();

    const handleClick = () => {
        props.isActiveFalse()
        props.clearParams()
    }

    return (
        <div className={classes.root}>
            <ColorButton
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleClick}
            >
                Finish Workout
            </ColorButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    isActiveFalse: () => dispatch({ type: IS_ACTIVE_FALSE }),
    clearParams: () => dispatch({ type: CLEAR_PARAMS })
})

export default connect(null, mapDispatchToProps)(StartWorkout)