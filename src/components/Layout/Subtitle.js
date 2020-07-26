import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center"
    },
    subtitle: {
        fontFamily: "'Exo', sans-serif",
        color: "#ba68c8"
    },
}));

export default function Subtitle(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography className={classes.subtitle}>
                Customize your workouts
            </Typography>
            <Typography className={classes.subtitle}>
                Never the same routine
            </Typography>
            <Typography className={classes.subtitle}>
                No equipment necessary
            </Typography>
            <Typography className={classes.subtitle}>
                Time to GIF FIT
            </Typography>
        </Box>
    )
}