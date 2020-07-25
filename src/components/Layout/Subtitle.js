import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
    root: {
        // marginTop: theme.spacing(1),
        textAlign: "center"
    },
    subtitle: {
        // fontSize: "1.2rem",
        fontFamily: "'Exo', sans-serif",
        color: "#ba68c8"
    },
}));

export default function Subtitle(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            {/* <Typography className={classes.subtitle}>
                Fit in a quick workout!
            </Typography>
            <Typography className={classes.subtitle}>
                Select a number of moves
            </Typography>
            <Typography className={classes.subtitle}>
                and how long each move lasts.
            </Typography>
            <Typography className={classes.subtitle}>
                Make sure to warm up first!
            </Typography> */}

            <Typography className={classes.subtitle}>
                Customize your workouts
            </Typography>
            <Typography className={classes.subtitle}>
                Never the same
            </Typography>
            <Typography className={classes.subtitle}>
                No equipment necessary
            </Typography>
            <Typography className={classes.subtitle}>
                (except a water bottle)
            </Typography>
            <Typography className={classes.subtitle}>
                Now let's Gif Fit!
            </Typography>
        </Box>
    )

}