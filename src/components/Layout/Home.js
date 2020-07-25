import React from 'react'
import Title from './Title'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexWrap: 'wrap',
        fontFamily: "'Nanum Pen Script', cursive",
        '& > *': {
            margin: ".1rem",
            width: "99vw",
            height: "98vh",
            [theme.breakpoints.up('sm')]: {
                width: "70vw",
                margin: "auto"
            },
            [theme.breakpoints.up('md')]: {
                width: "50vw",
                margin: "auto"
            },
            [theme.breakpoints.up('lg')]: {
                width: "40vw",
                margin: "auto"
            },
            [theme.breakpoints.up('xl')]: {
                width: "35vw",
                margin: "auto"
            },
        },
    },
}));


function Home(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Title />
        </div>
    )
}

export default Home