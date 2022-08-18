
import React, { useState, useEffect } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../LandingPage/LandingPage.css";
import Snackbars from "../../Elements/Snackbars";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import "./JourneyStep.css";
import Header from "../../Layout/Header/Header";
import HeaderNav from "../../Layout/Header/HeaderNav";
import ArrowBackIcon from "../../../static/icons/arrow_back.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import * as AllRoutes from "../../../routes";
import history from "../../../history";
const newIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <g
        id="baseline-arrow_back_ios-24px"
        transform="translate(0 16) rotate(-90)"
      >
        <path
          id="Path_1215"
          data-name="Path 1215"
          d="M8.175,3.267,6.935,2.1,0,8.629l6.935,6.529,1.24-1.167L2.48,8.629Z"
          transform="translate(3.808 -0.629)"
          fill="#0070e0"
        />
        <path
          id="Path_1216"
          data-name="Path 1216"
          d="M0,0H16V16H0Z"
          fill="none"
        />
      </g>
    </svg>
  );
};
const useStyles = makeStyles({
  root: {
    "& .MuiSvgIcon-root": {
      color: "#101010",
    },
    "& .MuiAccordionSummary-content": {},
    "& .MuiAccordionSummary-root": {},
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#6F6F6F",
    },
    "& .MuiInputLabel-root": {
      fontSize: "14px",
    },
  },
  formInput: {
    marginBottom: "15px",
    "& label": {
      color: "#6F6F6F",
      fontSize: "14px",
    },
    "&hover:not(.Mui-disabled):before": {
      border: 0,
    },
    "& label.Mui-focused": {
      color: "#6F6F6F",
    },
    "& .MuiFilledInput-input": {
      background: "#FFFFFF",
      border: "1px solid #9F9F9F",
      borderRadius: "2px",
    },
    "& .Mui-focused .MuiFilledInput-input": {
      borderColor: "#000000",
    },
    "& .MuiFilledInput-root:after": {
      border: "0",
    },
    "& .MuiFilledInput-root:before": {
      border: "0",
    },
    "& .MuiFilledInput-root.Mui-focused": {
      borderColor: "#000000",
    },
    "& .MuiFilledInput-root.Mui-focused:before": {
      border: "0",
    },
    "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
      border: "0",
    },
  },
  formInputSelect: {
    "& label": {
      color: "#6F6F6F",
      fontSize: "14px",
    },
    "& svg": {
      position: "absolute",
      right: "10px",
    },
    "& .MuiFilledInput-root": {
      background: "#FFFFFF",
    },
    "& .MuiSelect-root": {
      background: "#FFFFFF",
      border: "1px solid #9F9F9F",
      borderRadius: "2px",
    },
    "&.MuiFilledInput-root:after": {
      border: "0",
    },
    "&.MuiFilledInput-root:before": {
      border: "0",
    },
    "& .MuiSelect-select:before": {
      border: "0",
    },
    "& .MuiSelect-root.Mui-focused:before": {
      border: "0",
    },
    "&.MuiFilledInput-root:hover:not(.Mui-disabled):before": {
      border: "0",
    },
    "& .MuiSelect-select:focus": {
      background: "#FFFFFF",
    },
    "& .MuiFilledInput-input": {
      background: "#FFFFFF",
      border: "1px solid #9F9F9F",
      borderRadius: "2px",
    },
  },
});
const FamilyRelationship = (props) => {
  const classes = useStyles();
  const [urlParam, setUrlParam] = useState(false);
    const [selectedValue, setSelectedValue] = React.useState("");

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }
  useEffect(() => {
    const customURL =
      "?cid=93FAF143-A562-49CD-B545-102193AC5ACC&source=1&TokenNo=EBF1F0A0-3972-4E91-A9D8-41536D5F1FA2&isKsec=1&partnerToken=14601263";
    history.push({
      pathname: AllRoutes.FAMILY_RELATIONSHIP_DETAILS,
      search: customURL,
    });
  }, []);

  // Get The isKsec Value From URL
  useEffect(() => {
    setTimeout(() => {
      const search = window.location.search;
      const isKsec = new URLSearchParams(search).get("isKsec");
      setUrlParam(isKsec === "1" ? true : false);
    }, 1);
  }, []);
  
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
                    <Link to={AllRoutes.DEALER_JOURNEY_STEP_ONE}>
                      <button className="backButton">
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
                            Sum Insured{" "}
                            <span className="redText">Up to ₹ 734000</span>
                          </div>
                          <div className="sumInsured">
                            Total Premium (Excluding Taxes){" "}
                            <span className="redText">₹ 2000</span>
                          </div>
                          <div className="sumInsured">
                            Policy Term <span className="redText">1 Year</span>
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="whiteCard">
                    <div className="addOnCard">
                      <div className="heading">
                      Insured Details
                      </div>
                      <div className="addonFields">
                        <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-12 marginBot15">
                            <Snackbars
                              message="Note: Note: Select the relationship of the person you wish to insure. At one time, you can only select one relationship."
                              type="info"
                            />
                          </div>
                        </div>
    
                        <div className="relationBox">
                          <div className="row marginBot15">
                            <div className="col-sm-6 col-md-6 col-lg-2">
                              <div className="formBox">
                                <FormControlLabel
                                  control={
                                    <Radio
                                      checked={selectedValue === "a"}
                                      onChange={handleChange}
                                      value="a"
                                      name="radio-button-demo"
                                      aria-label="A"
                                      sx={{
                                        "& .MuiSvgIcon-root": { fontSize: 18 },
                                      }}
                                    />
                                  }
                                  label="Spouse"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-2">
                              <div className="formBox">
                                <FormControlLabel
                                  control={
                                    <Radio
                                      checked={selectedValue === "b"}
                                      onChange={handleChange}
                                      value="b"
                                      name="radio-button-demo"
                                      aria-label="A"
                                      sx={{
                                        "& .MuiSvgIcon-root": { fontSize: 18 },
                                      }}
                                    />
                                  }
                                  label="Member"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-2">
                              <div className="formBox formBoxFlexs">
                                <FormControlLabel
                                  control={
                                    <Radio
                                      checked={selectedValue === "c"}
                                      onChange={handleChange}
                                      value="c"
                                      name="radio-button-demo"
                                      aria-label="A"
                                      sx={{
                                        "& .MuiSvgIcon-root": { fontSize: 18 },
                                      }}
                                    />
                                  }
                                  label="Dependant Child"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-2">
                              <div className="formBox formBoxFlexs">
                                <FormControlLabel
                                  control={
                                    <Radio
                                      checked={selectedValue === "d"}
                                      onChange={handleChange}
                                      value="d"
                                      name="radio-button-demo"
                                      aria-label="A"
                                      sx={{
                                        "& .MuiSvgIcon-root": { fontSize: 18 },
                                      }}
                                    />
                                  }
                                  label="Dependant Parent"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-2">
                              <div className="formBox">
                                <FormControlLabel
                                  control={
                                    <Radio
                                      checked={selectedValue === "e"}
                                      onChange={handleChange}
                                      value="e"
                                      name="radio-button-demo"
                                      aria-label="A"
                                      sx={{
                                        "& .MuiSvgIcon-root": { fontSize: 18 },
                                      }}
                                    />
                                  }
                                  label="Customer"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    <div className="btnWrap">
                      <Link to={AllRoutes.SELF_MEMBER_DETAILS}>
                        <button className="btnProceed">Proceed</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      );
    };
    

export default FamilyRelationship;
