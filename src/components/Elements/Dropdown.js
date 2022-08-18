import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
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
        '& .MuiInputLabel-root': {
            fontSize: "14px"
        },
        '& .MuiFormHelperText-root': {
            marginLeft: 0,
            color:'red',
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



    },
    formInputSelect: {
        '& label': {
            color: "#6F6F6F",
            fontSize: "14px",
        },
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
    },
});
const newIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g id="baseline-arrow_back_ios-24px" transform="translate(0 16) rotate(-90)">
                <path id="Path_1215" data-name="Path 1215" d="M8.175,3.267,6.935,2.1,0,8.629l6.935,6.529,1.24-1.167L2.48,8.629Z" transform="translate(3.808 -0.629)" fill="#0070e0" />
                <path id="Path_1216" data-name="Path 1216" d="M0,0H16V16H0Z" fill="none" />
            </g>
        </svg>
    )
};
const Dropdown = (props) => {
    const { title, hasError, errorText } = props;
    const classes = useStyles();
    const [data, setData] = React.useState('');
    const handleChange = (event) => {
        setData(event.target.value);
    }
    return (
        <div className={classes.root}>
            <FormControl
                variant="filled"
                sx={{
                    width: '100%'
                }}
            >
                <InputLabel id="demo-simple-select-filled-label">{title}</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={data}
                    onChange={handleChange}
                    fullWidth
                    className={classes.formInputSelect}
                    IconComponent={newIcon}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Salaried'}>Salaried</MenuItem>
                    <MenuItem value={'Mrs'}>Mrs</MenuItem>
                    <MenuItem value={'Miss'}>Miss</MenuItem>
                    <MenuItem value={'Dr'}>Dr</MenuItem>
                    <MenuItem value={'Other'}>Other</MenuItem>
                </Select>
                {hasError && <FormHelperText>{errorText ? errorText : 'This is required!'}</FormHelperText>}
            </FormControl>
        </div>
    )

}

export default Dropdown;