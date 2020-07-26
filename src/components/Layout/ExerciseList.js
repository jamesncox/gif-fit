import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(1),
        textAlign: "center",
    },
    subtitle: {
        fontSize: ".8rem",
        fontFamily: "'Exo', sans-serif",
        color: "#b39ddb",
        fontWeight: "bold"
    },
    icon: {
        marginLeft: "-1rem",
        marginBottom: "1rem",
        fontSize: "1.2rem",
    },
    text: {
        fontFamily: "'Exo', sans-serif",
        color: "#7e57c2",
        textAlign: "center"
    },
    link: {
        color: "#ba68c8"
    }
}));

function ExerciseList(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box className={classes.root}>
            <Button className={classes.subtitle} onClick={handleClickOpen}>
                {/* <InfoIcon className={classes.icon} /> */}
                Exercise List
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    {props.exercises.map(exercise => {
                        return (
                            <DialogContentText key={exercise.id} id="alert-dialog-description" className={classes.text}>
                                {exercise.name}
                            </DialogContentText>
                        )
                    })}
                </DialogContent>
            </Dialog>
        </Box>
    )
}

const mapStateToProps = state => ({
    exercises: state.params.exercises
})

export default connect(mapStateToProps)(ExerciseList)