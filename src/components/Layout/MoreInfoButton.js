import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        textAlign: "center"
    },
    subtitle: {
        fontSize: ".8rem",
        fontFamily: "'Exo', sans-serif",
        color: "#9575cd"
    },
    icon: {
        marginRight: theme.spacing(1)
    }
}));

export default function MoreInfoButton(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Button className={classes.subtitle}>
                <InfoIcon className={classes.icon} /> More Info
            </Button>
        </Box>
    )
}