import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Link from '@material-ui/core/Link';

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
    },
    link: {
        color: "#ba68c8",
        fontWeight: "bold"
    },
    grayText: {
        marginTop: theme.spacing(4),
        fontFamily: "'Exo', sans-serif",
        color: "#9e9e9e",
        textAlign: "center"
    },
    grayLink: {
        color: "#bdbdbd",
        fontWeight: "bold"
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
                        Gif Fit randomly selects
                        exercises you can do right
                        from your home.
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" className={classes.text}>
                        All you have to do is tell Gif Fit how much time you want to work out.
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" className={classes.text}>
                        Choose the number of exercises, how long you
                        will perform each one, and the total number of rounds.
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" className={classes.text}>
                        Gif Fit recommends resting for half the time
                        you exercise (adhering to the
                        <Link
                            className={classes.link}
                            underline="none"
                            rel="noopener noreferrer"
                            href="http://www.tabatatraining.com/tabata-protocol/"
                            target="_blank"> Tabata Method
                        </Link>).
                        But you can choose any rest time
                        to make a workout more or less challenging.
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" className={classes.text}>
                        Good luck and happy fitness!
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" className={classes.grayText}>
                        Special thanks and credit to
                        <Link
                            className={classes.grayLink}
                            underline="none"
                            rel="noopener noreferrer"
                            href="https://8fit.com/"
                            target="_blank"> 8fit{' '}
                        </Link>
                        for the exercises and
                        <Link
                            className={classes.grayLink}
                            underline="none"
                            rel="noopener noreferrer"
                            href="https://giphy.com/"
                            target="_blank"> Giphy
                        </Link>{' '}
                        for access to all the gifs featured in this app.
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </Box>
    )
}