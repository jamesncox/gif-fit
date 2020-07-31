import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Beep from '../../sounds/very short beep low.wav'
import UIfx from 'uifx'

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
            volume: 1,
            throttleMs: 50
        }
    )

    const playBeep = () => {
        beep.play()
    }

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
            {counter === 3 ? playBeep() : null}
            {counter === 2 ? playBeep() : null}
            {counter === 1 ? playBeep() : null}
            <Typography className={classes.header}>
                Get Ready
            </Typography>
            <Typography className={classes.time}>
                :{counter.toString().padStart(2, '0')}
            </Typography>
        </Box>
    )
}