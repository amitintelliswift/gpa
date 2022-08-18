import './Counter.css';
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        display:"inline-flex",  
        '& .MuiFormControl-root': {
            width: "40px",
            height: "40px",
        },
        '& .MuiOutlinedInput-root': {
            border: 0,
            borderRadius: 0,
            width: "40px",
            height: "40px",
            padding: 0,
            margin: 0,
        },
        '& fieldset': {
            border: 0
        }
    },
    outline: {
        border: "1px solid #9F9F9F",
        borderRadius: "2px",
        width: "120px",
        height: "40px",
        display: "inline-flex",
        justifyContent: " space-between",
        alignItems: "center",

        '& button': {
            background: "transparent",
            borderRadius: 0,
            width: "40px",
            height: "40px",
            padding: 0,
            margin: 0,
            minWidth: 40,
            maxWidth: 40,

            '& svg': {
                color:"#0070E0"
            }
        },

        '& button:hover': {
            background: "transparent",
        },

        '& input': {
            padding: "3px",
            margin: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
        }
    }
})
const Counter = (props) => {
    const classes = useStyles();
    const [count, setCount] = useState(0);
    const IncNum = () => {
        setCount(count + 1);
    };
    const DecNum = () => {
        if (count > 0) setCount(count - 1);
        else {
            setCount(0);
        }
    };
    return (
        <div className={`counterWrap ${classes.root}`}>
            <div className={classes.outline}>
                <Button onClick={DecNum}>
                    <RemoveIcon />
                </Button>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={count}
                />
                <Button onClick={IncNum}>
                    <AddIcon />
                </Button>
            </div>
        </div>
    )
}
export default Counter;