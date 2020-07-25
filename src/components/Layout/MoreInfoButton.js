import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        textAlign: "center"
    },
    subtitle: {
        fontSize: ".8rem",
        fontFamily: "'Exo', sans-serif",
        color: "#7e57c2"
    },
    icon: {
        marginRight: theme.spacing(1)
    },
    text: {
        fontFamily: "'Exo', sans-serif",
        color: "#7e57c2",
        textAlign: "center"
    }
}));

export default function MoreInfoButton(props) {
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
                <InfoIcon className={classes.icon} /> More Info
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" className={classes.text}>
                        Gif Fit will randomly select
                        exercises you can do right
                        from your home!
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" className={classes.text}>
                        Choose a
                        number of exercises (we
                        recommend between 8 - 10
                        to start) and how long you
                        will perform each exercise.
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" className={classes.text}>
                        Gif Fit is built around the
                        Tabata method, resting for half the time
                        you exercise. But you can
                        adjust the rest time
                        to make a workout more
                        or less challenging.
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" className={classes.text}>
                        Good luck and happy fitness!
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </Box>
    )
}