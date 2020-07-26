import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    header: {

    },
    media: {
        height: 0,
        paddingTop: '1 rem'
    },
}));

export default function DisplayGif(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title={props.name}
                className={classes.header}
            />
            <CardMedia
                className={classes.media}
                image={props.gif}
                title={props.name}
            />
            <CardContent>
                <Typography>
                    Description
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
                <Typography>
                    Modified
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.modified}
                </Typography>
            </CardContent>
        </Card>
    );
}