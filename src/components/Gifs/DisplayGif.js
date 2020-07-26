import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
    },
    header: {
        color: "#7e57c2"
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    text: {
        marginTop: theme.spacing(1),
        color: "#ba68c8"
    }
}));

export default function DisplayGif(props) {
    const classes = useStyles();
    const img = require.context('../../assets/', true);

    return (
        < Card className={classes.root} >
            <CardHeader
                title={props.exercise.name}
                className={classes.header}
            />
            <CardMedia
                className={classes.media}
                image={img(`./${props.exercise.gif}`)}
                title={props.exercise.name}
            />
            <CardContent>
                <Typography className={classes.text}>
                    Description
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.exercise.description}
                </Typography>
                <Typography className={classes.text}>
                    Modified
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.exercise.modified}
                </Typography>
            </CardContent>
        </Card >
    );
}