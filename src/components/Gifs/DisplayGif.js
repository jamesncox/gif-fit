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

    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    text: {
        marginTop: theme.spacing(1)
    }
}));

export default function DisplayGif(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title="Burpees"
                className={classes.header}
            />
            <CardMedia
                className={classes.media}
                image={require("../../assets/burpees.webp")}
                title="burpees"
            />
            <CardContent>
                <Typography className={classes.text}>
                    Description
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lower body to ground all the way, as you perform a push-up, jump up straight. Repeat.
                </Typography>
                <Typography className={classes.text}>
                    Modified
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lift up from ground without push-up, less intense jump
                </Typography>
            </CardContent>
        </Card>
    );
}