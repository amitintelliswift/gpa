import React from 'react';
import '../../LandingPage/LandingPage.css';
import './JourneyStep.css';
import Header from '../../Layout/Header/Header';
import HeaderNav from '../../Layout/Header/HeaderNav';
import ArrowBackIcon from '../../../static/icons/arrow_back.svg';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import * as AllRoutes from '../../../routes';
import DoneIcon from '@mui/icons-material/Done';
import Snackbars from '../../Elements/Snackbars';
// import history from '../../../history';
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
const Thankyou = (props) => {
    const classes = useStyles();

    // useEffect(() => {
    //     const customURL = '?cid=93FAF143-A562-49CD-B545-102193AC5ACC&source=1&TokenNo=EBF1F0A0-3972-4E91-A9D8-41536D5F1FA2&isKsec=1&partnerToken=14601263';
    //     history.push({
    //         pathname: AllRoutes.THANKYOU,
    //         search: customURL
    //     })
    // }, [])

    return (
        <main className='main'>
            <Header />
            <HeaderNav />
            <section className='journeyWrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <h2 className='journeyTitle'>Kotak Group Smart Cash</h2>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className='backWrap'>
                                <Link to={AllRoutes.DEALER_JOURNEY_STEP_ONE}>
                                    <button
                                        className='backButton'
                                    >
                                        <img src={ArrowBackIcon} alt="back arrow" />
                                        <span>Back</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className={`whiteCard ${classes.root}`}>

                                <div className='thankyouWrap'>
                                    <div className='thankTick'>
                                        <div className='outer'>
                                            <div className='inner'>
                                                <DoneIcon />
                                            </div>
                                        </div>
                                    </div>   
                                    <div className='thankyouText'>Thank You!</div>   
                                    <div className='thankyouInfo'>
                                        <Snackbars
                                            type="success"
                                            message="Your application has been received and will be processed shortly."
                                        />
                                    </div>
                                                          
                                </div>

                                <div className='btnWrap'>
                                    <Link to={AllRoutes.LANDING_PAGE}>
                                        <button className='btnProceed'>Back To Home</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default Thankyou;