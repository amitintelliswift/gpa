import * as React from 'react';
import Alert from '@mui/material/Alert';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        '& .MuiAlert-message': {
            color: "#101010",
            letterSpacing: "0.13px",
            fontSize: "13px",
        }
    },
    info: {
        backgroundColor: "#CDE3EF !important",
        '& .MuiAlert-icon': {
            '& svg': {
                color: "#101010"
            }
        }
    }
});
// const type = 'info | error | warning | success';
const Snackbars = ({ message, type }) => {
    const classes = useStyles();
    const cls = (type) => {
        if (type==="info") {
            return classes.info
        } else if (type==="warning") {
            return classes.warning
        } else if (type==="error") {
            return classes.error
        } else if (type==="success") {
            return classes.success
        } else {
            return classes.info
        }
    }
    return (
        <div className={classes.root}>
            <Alert 
            severity={type} 
            className={cls(type)}
            >
                {message}
            </Alert>
        </div>
    )
}
export default Snackbars;