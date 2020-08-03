import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center"
    },
    checkbox: {
        marginTop: theme.spacing(2),
        fontFamily: "'Exo', sans-serif",
        color: "#ba68c8",
        alignSelf: "center",
    },
    label: {
        fontSize: ".9rem",
        fontFamily: "'Exo', sans-serif",
        color: "#ba68c8",
    }
}));

const PurpleCheckBox = withStyles({
    root: {
        color: deepPurple[300],
        '&$checked': {
            color: deepPurple[400],
        },
    },
    checked: {},
})((props) => <Checkbox style={{ fontSize: ".1rem" }} color="default" {...props} />);

export default function SelectDumbbells() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checked: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormGroup row className={classes.root}>
            <FormControlLabel
                className={classes.checkbox}
                control={<PurpleCheckBox checked={state.checkedG} onChange={handleChange} name="checked" />}
                label={<Typography className={classes.label}>INCLUDE DUMBBELLS?</Typography>}
            />
        </FormGroup>
    );
}