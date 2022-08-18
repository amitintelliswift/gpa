import './PaymentModal.css';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from 'react';
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

    tableSelect: {
        '& .MuiSelect-select': {
            height: "36px !important",
            padding: "0px 6px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            background: "transparent",
            border: 0,
        },
        '& .MuiFilledInput-root': {
            height: "36px",
            background: "transparent",
            width: "130px",
            borderRadius: "2px",
            border: "1px solid transparent",
            fontSize: "15px",
        },
        '& .MuiFilledInput-root:hover': {
            borderColor: "#9F9F9F",
            background: "none",
        }
    }
});
const PaymentModal = (props) => {
    const classes = useStyles();
    const { show, toggleShow, title, isFooter, isHeader } = props;
    const [eye, setEye] = useState(false);
    const handleClose = () => {
        toggleShow()
    }
    const toggleEye = () => {
        setEye(!eye);
    }
    return (
        <>
            {show &&
                <>
                    <div className={`fade modal-backdrop ${show ? 'show' : ''}`}></div>
                    <div className={`modal fade modal-dialog-centered ${show ? 'show' : ''}`} tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content payment-modal">
                                {isHeader &&
                                    <div className="modal-header">
                                        <h5 className="modal-title">{title}</h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                            onClick={handleClose}
                                        >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                }
                                <div className="modal-body">
                                    <div className='payment-modal-title'>
                                        Enter OTP sent via SMS
                                    </div>
                                    <div className='payment-modal-subtitle'>
                                        Enter the 6-digit OTP sent on +91 8•••••3266
                                    </div>
                                    <div className='otpField'>
                                        <TextField
                                            className={classes.formInput}
                                            id="filled-basic"
                                            label="OTP"
                                            variant="filled"
                                            type={!eye ? "password" : "text"}
                                            fullWidth
                                        />
                                        <button className='eyeIcon'
                                            onClick={toggleEye}
                                        >
                                            {!eye ?
                                                <>
                                                    <RemoveRedEyeIcon />
                                                    <span>Show</span>
                                                </>
                                                :
                                                <>
                                                    <VisibilityOffIcon />
                                                    <span>Hide</span>
                                                </>
                                            }
                                        </button>
                                    </div>
                                    <div className='dont-receive'>
                                        <Link to="">Didn’t receive OTP?</Link>
                                    </div>
                                </div>
                                {isFooter &&
                                    <div className="modal-footer">
                                        <button
                                            onClick={handleClose}
                                            type="button" className="btnCancel" data-dismiss="modal">Cancel</button>
                                        <button
                                            onClick={handleClose}
                                            type="button" className="btnProceed">Verify OTP</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default PaymentModal;
