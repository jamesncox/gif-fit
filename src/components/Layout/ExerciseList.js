import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

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
    }
}));

function ExerciseList(props) {
    const classes = useStyles();
    // const img = require.context('../../assets/', true);
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
                            <Card key={exercise.id} className={classes.cardRoot} >
                                <CardHeader
                                    title={exercise.name}
                                    className={classes.header}
                                    titleTypographyProps={{ variant: 'h6' }}
                                />
                                <CardMedia
                                    className={classes.media}
                                    // image={img(`./${exercise.gif}`)}
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

export default connect(mapStateToProps)(ExerciseList)