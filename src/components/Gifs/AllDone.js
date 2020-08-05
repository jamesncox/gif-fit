import React from 'react';
import { connect } from 'react-redux'
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
        color: "#7e57c2"
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
}));

function AllDone(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <CardHeader
                title={props.successGif[0].message}
                className={classes.header}
            />
            <CardMedia
                className={classes.media}
                image={props.successGif[0].gif}
                title={props.successGif[0].title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Make sure to cool down, stretch and drink plenty of water!
                </Typography>
            </CardContent>
        </Card >
    );
}

const mapStateToProps = state => ({
    successGif: state.successGif.successGif
})

export default connect(mapStateToProps)(AllDone)