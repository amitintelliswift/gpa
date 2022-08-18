import './PaymentModal.css';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from 'react';
import Verifyotp from './Verifyotp';
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
const Genetateotp = (props) => {
    const classes = useStyles();
    const { show, toggleShow, title, isFooter, isHeader } = props;
    const [eye, setEye] = useState(false);
    const [verify, setVerify] = useState(false);
    const [show1, setShow1] = useState(true);
    const [Client_DP_ID, setclient] = useState("AVPT5");
    const [Mobile_Number, setMobile] = useState("7021536003");
    const [RqUID, setRequid] = useState("270522000001");
    
    const toggleShow1 = () => setVerify((p) => !p);
    const handleClose = () => {
        toggleShow()
    }
    const handleClosee = () => {
        setShow1(false)
    }
    const Verifyotpp = () => {
        setVerify(true);
    }
    const toggleEye = () => {

        setEye(!eye);
    }
    const handleChange=(event)=>{
        setclient(event.target.value)
        
    }
    const handleChange3=(event)=>{
        
        setRequid(event.target.value)
    }
    const handleChange2=(event)=>{
       
        setMobile(event.target.value)
    
    }
    const submit= async e   =>{
        const data = JSON.stringify({Mobile_Number: Mobile_Number,
        Client_DP_ID: Client_DP_ID,
        RqUID: RqUID,
    });
        
        let config = {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            
            
            },
            body: data
        };
        
       
        
              fetch('https://kgibridgeuat.kotakmahindrageneralinsurance.com/BPOS_KSEC_SERVICE/wsKGIKescIntServices.svc/Fn_Generate_OTP/Kgisvcnetbanking', config)
                .then(response =>
                    response.json().then(user => ({ user, response }))
                ).then(({ response }) =>  {
                    
                    if (response.ok) {
                        console.log("Success") // some reason error message
                      
                        Verifyotpp()
                    
                    }
                    handleClosee()
                    setclient(response)
                    setMobile(response)
                    setRequid(response)
                }).catch(err => alert("Something went wrong please try again"))
                // const body = await response.text();
                // setMobile({ responseToPost: body })
        }
    return (
        <div>
            {show1?(
                <div>            {show &&
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
                                       Please Enter Mobile Number
                                    </div>
                                {/* <TextField
                                className={classes.formInput}
                                id="filled-basic"
                                label=" Client_DP_ID*"
                                variant="filled"
                                value={Client_DP_ID}
                                name="Client_DP_ID"
                                onChange={handleChange}
                                // helperText={errorMessage}

                                fullWidth
                              /> */}
                              
                                    
                                    </div>
                                    <div className="modal-body">
                                <TextField
                                className={classes.formInput}
                                id="filled-basic"
                                label=" Mobile_Number*"
                                variant="filled"
                                value={Mobile_Number}
                                name="Mobile_Number"
                                onChange={handleChange2}
                                // helperText={errorMessage}

                                fullWidth
                              />
                              
                                    
                                    </div>
                                    {/* <div className="modal-body">
                                <TextField
                                className={classes.formInput}
                                id="filled-basic"
                                label="RqUID*"
                                variant="filled"
                                value={RqUID}
                                name="RqUID"
                                onChange={handleChange3}
                                // helperText={errorMessage}

                                fullWidth
                              />
                              
                                    
                                    </div> */}
                               
                                {isFooter &&
                                    <div className="modal-footer">
                                        <button
                                            onClick={handleClose}
                                            type="button" className="btnCancel" data-dismiss="modal">Cancel</button>
                                        <button
                                            onClick={submit}
                                            type="button" className="btnProceed">Generate OTP</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </>
                
            }
            </div>
            ):null}
              <Verifyotp
        show={verify}
        toggleShow={toggleShow1}
        title={"More"}
        isFooter={true}
        isHeader={false}
      />
        </div>
        
    )
}

export default Genetateotp;
