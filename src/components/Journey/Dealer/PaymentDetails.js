import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Genetateotp from "./PaymentModal/Generateotp";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../../LandingPage/LandingPage.css';
import './JourneyStep.css';
import Header from '../../Layout/Header/Header';
import HeaderNav from '../../Layout/Header/HeaderNav';
import ArrowBackIcon from '../../../static/icons/arrow_back.svg';
import { makeStyles } from '@material-ui/core/styles';
import * as AllRoutes from '../../../routes';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import PaymentModal from './PaymentModal/PaymentModal';
import { useDispatch, useSelector } from 'react-redux';
import { generateOTP } from '../../../actions/otp';
import history from '../../../history';
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
const PaymentDetails = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
   
    const [activeClass, setActiveClass] = React.useState('online')
    const [showField, setShowField] = React.useState(false);
    const [urlParam, setUrlParam] = React.useState(false);
    const [mode, setMode] = useState();
    const getPremiumData = useSelector(state => state.saveData.savePremiumData);
    const [show, setShow] = React.useState(false);
    const [show1, setShow1] = React.useState(false);
    const [show2, setShow2] = React.useState(true);
    const [gen, setGen] = React.useState(false);
    const [Email_ID, setEmail] = React.useState("diwakar.mishra@kotak.com");
    const [Client_DP_ID, setclient] = useState("AVPT5");
  
    const [RqUID, setRequid] = useState("270522000001");
    const toggleShow = () => setShow((p) => !p);
    const toggleShow1 = () => setGen((p) => !p);
    const handlePaymentModal = (props) => {
      setShow(true);
      handleOnClick()
    };
    const hanlechange =(e)=>{
      setEmail(e.target.value)
    }
    const generate =(props)=>{
      setGen(true)
    }
    const handlePaymentModal1 = (props) => {
      setShow1(true);
      handlePaymentModal2()
      
    };
    const handlePaymentModal2 = (props) => {
      setShow2(false);
      
    };
    const handlePaymentModal3 = (props) => {
      setShow2(true);
      
    };
    const [showw , setShoww] = useState(false);
      const handleOnClick = () => {
        setShow1(false);
        handlePaymentModal3()
      }
      const [active, setActive] = useState(1);
    const handleClick = e => {
      const index = parseInt(e.target.id, 0);
      if (index !== active) {
        setActive(index);
      }
    };

    useEffect(() => {
        const customURL = '?cid=93FAF143-A562-49CD-B545-102193AC5ACC&source=1&TokenNo=EBF1F0A0-3972-4E91-A9D8-41536D5F1FA2&isKsec=1&partnerToken=14601263';
        history.push({
            pathname: AllRoutes.PAYMENT_DETAILS,
            search: customURL
        })
    }, [])

    
    // Get the URL Parameters
    useEffect(()=>{
        setTimeout(()=>{
            const search = window.location.search;
            const isKsec = new URLSearchParams(search).get('isKsec');
            setUrlParam(isKsec==="1"?true:false)
        }, 100)
    },[])
    
    
    return (
        <main className="main">
        <Header />
        <HeaderNav />
        <section className="journeyWrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                
                <h2 className="journeyTitle">Kotak Group Accident Protect</h2>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="backWrap">
                  <Link to={AllRoutes.SELF_MEMBER_DETAILS}>
                    <button className="backButton"  >
                      <img src={ArrowBackIcon} alt="back arrow" />
                      <span>Back</span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className={`accordianWrapper ${classes.root}`}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        flexDirection: "row-reverse",
                        color: "#101010",
                        fontSize: "18px",
                        margin: "10px 0",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#101010",
                          fontSize: "18px",
                          fontFamily: "Roboto",
                          fontWeight: "500",
                        }}
                      >
                        Premium Details
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="premiumDetails">
                        <div className="sumInsured">
                          Sum Insured <span className="redText"> ₹ 4,00,000</span>
                        </div>
                        <div className="sumInsured">
                          Total Premium (Excluding Taxes){" "}
                          <span className="redText">₹ 599</span>
                        </div>
                        <div className="sumInsured">
                          Policy Term <span className="redText">2 Year</span>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className={`whiteCard ${classes.root}`}>
                  <div className="paymentDetails">
                    <div className="relTitle">Payment Details</div>
                    <div className="paymentSubText">
                      How do you want to pay? Please select payment method.
                    </div>
                    <div className="row">
                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <button onClick={handlePaymentModal1}>
                          <div className={active === 0?"paymentBox active" :"paymentBox"}onClick={handleClick} id={0} >
                            <div className="pleft">
                              <div className="pTitle"onClick={handleClick} active={active===0} id={0}>Payment by Ledger</div>
                              <div className="pText" onClick={handleClick} active={active===0} id={0}>
                                Payments will be tracked through accounting
                                records /ledger
                              </div>
                            </div>
                            <div className="pright">
                              <ReceiptLongIcon />
                            </div>
                          </div>
                        </button>
                      </div>
  
                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <button onClick={handlePaymentModal}>
                          <div className={active === 1?"paymentBox active" :"paymentBox"}onClick={handleClick} id={1}>
                            <div className="pleft">
                              <div className="pTitle" onClick={handleClick} active={active===1} id={1}>Send Payment Link</div>
                              <div className="pText" onClick={handleClick} active={active===1} id={1}>
                                You will receive a payu link to complete the
                                payment
                              </div>
                            </div>
                            <div className="pright">
                              <SendIcon />
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="EmailBox">
                      <div className="row">
                        {show2?(
                        <div className="col-sm-4">
                          <TextField
                            className={classes.formInput}
                            id="filled-basic"
                            label="Email ID *"
                            variant="filled"
                            value={Email_ID}
                            onChange={hanlechange}
                            fullWidth
                          />
                        </div>
                        ):null}
                        {show1 ?(
                        <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                                <FormControl
                                  variant="filled"
                                  sx={{
                                    width: "100%",
                                  }}
                                >
                                  <InputLabel id="demo-simple-select-filled-label">
                                  Ledger Account Number *
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    fullWidth
                                    className={classes.formInputSelect}
                                    // IconComponent={newIcon}
                                    // onChange={handleInputChange}
                                    // value={field.title}
                                    name="title"
                                    defaultValue=""
                                  >
                                   
                                    <MenuItem value=" 123985231235671">
                                      123985231235671
                                    </MenuItem>
                                    {/* <MenuItem value={"Mr"}>Mr</MenuItem>
                                    <MenuItem value={"Mrs"}>Mrs</MenuItem>
                                    <MenuItem value={"Miss"}>Miss</MenuItem>
                                    <MenuItem value={"Dr"}>Dr</MenuItem>
                                    <MenuItem value={"Other"}>Other</MenuItem> */}
                                  </Select>
                                </FormControl>
                              </div>
                        ):null}
                      </div>
                    </div>
                  </div>
  
                  <div className="btnWrap">
                 
                  {show1 ?(
                    <a >
                   
                      <button className="btnProceed" onClick={generate}  >Continue</button>
                     
                    </a>):null}
                    <a >
                    {show2?(
                        <Link to={AllRoutes.THANKYOU}>
                    <button className="btnProceed"   >Continue</button></Link>):null}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        
         <Genetateotp
          show={gen}
          toggleShow={toggleShow1}
          title={"More"}
          isFooter={true}
          isHeader={false}
        />
      </main>
       
       
    );
  };
  

export default PaymentDetails;