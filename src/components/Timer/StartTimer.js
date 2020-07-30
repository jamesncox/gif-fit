import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import UIfx from 'uifx'
import Beep from '../../sounds/short beep medium tone.wav'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center"
    },
    header: {
        fontSize: "1.5rem",
        fontFamily: "'Exo', sans-serif",
        color: "#bdbdbd"
    },
    time: {
        color: "#bdbdbd",
        fontSize: "3rem"
    }
}))

export default function StartTimer() {
    const classes = useStyles()
    const [counter, setCounter] = useState(10)

    useEffect(() => {
        const interval = counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
        return () => clearInterval(interval)
    }, [counter])

    const beep = new UIfx(
        Beep,
        {
            volume: .06,
            throttleMs: 50
        }
    )

    useEffect(() => {
        if (counter === 3) beep.play()
        if (counter === 2) beep.play()
        if (counter === 1) beep.play()
    }, [counter, beep])

    // useEffect(() => {
    //     let start = counter
    //     const count = (start) => {

    //         const timeout = setTimeout(() => {
    //             start--
    //             setCounter(start)
    //             console.log(start)
    //         }, 1000)
    //         return () => clearTimeout(timeout)
    //     }

    //     if (start > 1) count(start)
    // }, [counter])

    return (
        <Box className={classes.root}>
            <Typography className={classes.header}>
                Get Ready
            </Typography>
            <Typography className={classes.time}>
                :{counter.toString().padStart(2, '0')}
            </Typography>
        </Box>
    )
}