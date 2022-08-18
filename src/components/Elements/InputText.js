import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        '& .MuiSvgIcon-root': {
            color: '#101010',
        },
        '& .MuiAccordionSummary-content': {
        },
        '& .MuiAccordionSummary-root': {
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: "#6F6F6F",
        },
        '& .MuiFormHelperText-root': {
            color: '#d32f2f',
        }
    },
    formInput: {
        marginBottom: '15px',
        '& label': {
            color: "#6F6F6F",
            fontSize: "14px",
        },
        "&hover:not(.Mui-disabled):before": {
            border: 0,
        },
        '& label.Mui-focused': {
            color: "#6F6F6F",
        },
        '& .MuiFilledInput-input': {
            background: '#FFFFFF',
            border: '1px solid #9F9F9F',
            borderRadius: "2px",
        },
        '& .Mui-focused .MuiFilledInput-input': {
            borderColor: "#000000"
        },
        '& .MuiFilledInput-root:after': {
            border: '0'
        },
        '& .MuiFilledInput-root:before': {
            border: '0'
        },
        '& .MuiFilledInput-root.Mui-focused': {
            borderColor: '#000000'
        },
        '& .MuiFilledInput-root.Mui-focused:before': {
            border: '0'
        },
        '& .MuiFilledInput-root:hover:not(.Mui-disabled):before': {
            border: '0'
        },
        '& .Mui-error input': {
            borderColor: '#d32f2f',
        },
        '& .Mui-error.Mui-focused input': {
            borderColor: '#d32f2f',
        },
        '& label.Mui-error.Mui-focused': {
            color: '#d32f2f',
        },
        '& label.Mui-error': {
            color: '#d32f2f',
        },

    },
    formInputSelect: {
        "& svg": {
            position: "absolute",
            right: '10px',
        },
        '& .MuiFilledInput-root': {
            background: '#FFFFFF',
        },
        '& .MuiSelect-root': {
            background: '#FFFFFF',
            border: '1px solid #9F9F9F',
            borderRadius: "2px",
        },
        '&.MuiFilledInput-root:after': {
            border: '0'
        },
        '&.MuiFilledInput-root:before': {
            border: '0'
        },
        '& .MuiSelect-select:before': {
            border: '0'
        },
        '& .MuiSelect-root.Mui-focused:before': {
            border: '0'
        },
        '&.MuiFilledInput-root:hover:not(.Mui-disabled):before': {
            border: '0'
        },
        '& .MuiSelect-select:focus': {
            background: '#FFFFFF',
        },
        '& .MuiFilledInput-input': {
            background: '#FFFFFF',
            border: '1px solid #9F9F9F',
            borderRadius: "2px",
        },
        '&.Mui-error .MuiFilledInput-input': {
            borderColor: '#d32f2f',
        },
    },
});

const InputText = ({value, name, id, label, fullWidth, onChange, error, errorText, required, inputProps, type}) => {
    const classes = useStyles();
    // const handleOnChange = (event) => {
    //     onChange(event.target.value);
    // };
    return (
        <div className={classes.root}>
            <TextField
                type={type}
                inputProps={inputProps}
                value={value}
                name={name}
                className={classes.formInput}
                id={id}
                label={label}
                variant="filled"
                fullWidth={fullWidth ? fullWidth : false}
                onChange={onChange}
                required={required}
                error={error}
            />
            {error && <FormHelperText>{errorText ? errorText : 'This is required!'}</FormHelperText>}
        </div> 
    )

}

export default InputText;