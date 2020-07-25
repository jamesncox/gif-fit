import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "3rem",
        top: theme.spacing(1),
        color: "#ba68c8"
    },
}));

export default function Title(props) {
    const classes = useStyles();

    return (
        <Typography className={classes.title}>
            Gif Fit
        </Typography>
    )

}