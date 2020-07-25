import React from 'react'
import Title from './Title'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1),
        display: 'flex',
        justifyContent: "center",
        flexWrap: 'wrap',
        fontFamily: "'Nanum Pen Script', cursive",
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