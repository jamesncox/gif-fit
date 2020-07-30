import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    SET_EXERCISES,
    SET_EXERCISE_ROUNDS
} from '../../actionTypes'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        textAlign: "center",
    },
    subtitle: {
        fontSize: ".8rem",
        fontFamily: "'Exo', sans-serif",
        color: "#b39ddb",
        fontWeight: "bold"
    },
    cardRoot: {
        width: 200,
        textAlign: "center",
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            width: 300,
        },
        [theme.breakpoints.up('md')]: {
            width: 400,
        },
    },
    link: {
        color: "#ba68c8"
    },
    header: {
        color: "#ba68c8",
        fontSize: ".5rem"
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    text: {
        marginTop: theme.spacing(1),
        color: "#ba68c8"
    },
    iconContent: {
        textAlign: "center",
        marginBottom: theme.spacing(1)
    },
    button: {
        color: "#7e57c2",
        fontSize: ".8rem",
        fontFamily: "'Exo', sans-serif",
    },
    icon: {
        marginRight: theme.spacing(1)
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
    }

    const handleReloadExercises = () => {
        props.setExercises()
        props.setExerciseRounds()
    }

    return (
        <Box className={classes.root}>
            <Button className={classes.subtitle} onClick={handleClickOpen}>
                Exercise List
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContent className={classes.iconContent}>
                        <Button className={classes.button} onClick={handleReloadExercises}>
                            <AutorenewIcon className={classes.icon} /> Reload
                        </Button>
                    </DialogContent>
                    {props.exercises.map(exercise => {
                        return (
                            <Card key={exercise.id} className={classes.cardRoot} >
                                <CardHeader
                                    title={exercise.name}
                                    className={classes.header}
                                    titleTypographyProps={{ variant: 'h6' }}
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={exercise.gif}
                                    title={exercise.name}
                                />
                            </Card >
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

const mapDispatchToProps = dispatch => ({
    setExercises: () => dispatch({ type: SET_EXERCISES }),
    setExerciseRounds: () => dispatch({ type: SET_EXERCISE_ROUNDS }),
})


export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList)