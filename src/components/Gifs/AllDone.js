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
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            width: 600,
        },
    },
    header: {
        color: "#ba68c8"
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
    // const img = require.context('../../assets/', true);

    return (
        <Card className={classes.root} >
            <CardHeader
                title="You did it!"
                className={classes.header}
            />
            <CardMedia
                className={classes.media}
                image={require("../../assets/ron-swanson-proud.gif")}
                title="Ron Swanson I'm really proud of you"
            />
            <CardContent>
                {/* <Typography className={classes.text}>
                    Description
                </Typography> */}
                <Typography variant="body2" color="textSecondary" component="p">
                    Make sure to cool down, stretch and drink plenty of water!
                </Typography>
                {/* <Typography className={classes.text}>
                    Modified
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.exercise.modified}
                </Typography> */}
            </CardContent>
        </Card >
    );
}