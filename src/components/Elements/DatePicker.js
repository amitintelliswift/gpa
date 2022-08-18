import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        '& fieldset' :{
            border:0,
        },
        '& .MuiOutlinedInput-root': {
            border: "1px solid #9F9F9F",
            background: "#FFFFFF",
            borderRadius: "2px",
        },
        '& label': {
            color: "#6F6F6F",
            fontSize: "14px",
            top:"15px",
        },
        '& .MuiSvgIcon-root' :{ 
            color: "#9F9F9F !important",
        },
        '& input': {
            position: "relative",
            top: "10px",
        },
    }
})

export default function DatePicker(props) {
    const {title, error, errorText, value, inputFormat, required, onInputChange} = props;
    const [dateValue, setDateValue] = React.useState(new Date());

    const handleChange = (newValue) => {
        setDateValue(newValue);
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                    <DesktopDatePicker
                        label={title}
                        inputFormat= {inputFormat ? inputFormat : 'dd/MM/yyyy'}
                        value={dateValue}
                        onChange={handleChange}
                        renderInput={(props) => <TextField value={value} {...props} required={required ? true : false} name="dateofbirth" onChange={onInputChange} />}
                        required={true}
                    />
                </Stack>
            </LocalizationProvider>
            {error && <FormHelperText>{errorText ? errorText : 'This is required!'}</FormHelperText>}
        </div>
    );
}