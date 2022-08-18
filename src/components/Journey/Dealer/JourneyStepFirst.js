import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../LandingPage/LandingPage.css";
import { savePremiumData } from "../../../actions/saveData";
import "./JourneyStep.css";
import Header from "../../Layout/Header/Header";
import HeaderNav from "../../Layout/Header/HeaderNav";
import ArrowBackIcon from "../../../static/icons/arrow_back.svg";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Link, useLocation } from "react-router-dom";
import * as AllRoutes from "../../../routes";
import InputText from "../../Elements/InputText";
import newIcon from "../../../static/icons/DropIcon";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { getBOPSToken, getClientInfo } from "../../../actions/clientInfo";
import history from "../../../history";
import { saveJourneyData, saveProposal } from "../../../actions/saveProposal";

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
    "& .Mui-error input": {
      borderColor: "#d32f2f",
    },
    "& .Mui-error.Mui-focused input": {
      borderColor: "#d32f2f",
    },
    "& label.Mui-error.Mui-focused": {
      color: "#d32f2f",
    },
    "& label.Mui-error": {
      color: "#d32f2f",
    },
  },
  formInputSelect: {
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
    "&.Mui-error .MuiFilledInput-input": {
      borderColor: "#d32f2f",
    },
  },
});
const fields = {
  title: "",
  firstname: "",
  middlename: "",
  lastname: "",
  dateofbirth: "",
  email: "",
  mobile: "",
  gender: "",
  marital: "",
  occupation: "",
  panNumber: "",
  uniqueId: "",
  CRNAccNo: "",
  addressLine1: "",
  addressLine2: "",
  pincode: "",
  city: "",
  crn: "",
  branchcode:"",
  spcode:""

};
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => {
    if (val.trim().length > 0) {
      valid = false;
    } else {
      valid = true;
    }
  });
  return valid;
};

const JourneyStepFirst = (props) => {
  const dispatch = useDispatch();
  let linkLocation = useLocation();
  const classes = useStyles();
  const [field, setField] = useState(fields);
  const [errors, setErrors] = useState(fields);
  const [dataToNext, setDataToNext] = useState({ planID: 108, premium: 3000, totalSumInsured: 2075000 });
  const [opt, setOpt] = useState("");
  const [urlParam, setUrlParam] = useState(false);
  const [policyData, setPolicyData] = useState(linkLocation.state.policyData);
  const serviceAccessData = useSelector(
    (state) => state.clientInfo.serviceAccessCode
  );
  const getClientData = useSelector((state) => state.clientInfo.getClientInfo);
  const customURL =
    "?cid=93FAF143-A562-49CD-B545-102193AC5ACC&source=1&TokenNo=EBF1F0A0-3972-4E91-A9D8-41536D5F1FA2&isKsec=1&partnerToken=14601263";

  // Updated URL with default Parameters
  useEffect(() => {
    history.push({
      pathname: AllRoutes.DEALER_JOURNEY_STEP_ONE,
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

  // Call GETBPOSTOKEN and Client KEY API
  useEffect(() => {
    if (urlParam) {
    }
    dispatch(getBOPSToken());
  }, []);

  useEffect(() => {
    dispatch(savePremiumData(dataToNext));
  }, [dataToNext]);


  // Get Client Info API
  useEffect(() => {
    if (urlParam) {
    }
    dispatch(getClientInfo(serviceAccessData.vTokenCode, policyData.premium));
  }, [serviceAccessData]);

  // Set Client Data to State
  useEffect(() => {
    if (getClientData && getClientData.objKsecAPIResponse) {
      setField({
        title: getClientData.objKsecAPIResponse.Title,
        firstname: getClientData.objKsecAPIResponse.FirstName,
        middlename: getClientData.objKsecAPIResponse.MiddleName,
        lastname: getClientData.objKsecAPIResponse.LastName,
        dateofbirth: getClientData.objKsecAPIResponse.CustomerDob,
        email: getClientData.objKsecAPIResponse.EmailId,
        mobile: getClientData.objKsecAPIResponse.MobileNo,
        gender:
          getClientData.objKsecAPIResponse.CustomerGender === ""
            ? "Other"
            : getClientData.objKsecAPIResponse.CustomerGender,
        marital: getClientData.objKsecAPIResponse.MaritalStatus,
        occupation: getClientData.objKsecAPIResponse.Occupation,
        panNumber: getClientData.objKsecAPIResponse.PAN_Number,
        uniqueId: getClientData.objKsecAPIResponse.RqUID,
        CRNAccNo: getClientData.objKsecAPIResponse.RqUID,
        addressLine1: getClientData.objKsecAPIResponse.ProposerAddLine1,
        addressLine2: getClientData.objKsecAPIResponse.ProposerAddLine2,
        pincode: getClientData.objKsecAPIResponse.ProposerPinCode,
        city: getClientData.objKsecAPIResponse.City,
        crn: "",
  branchcode:"",
  spcode:""
      });
      dispatch(
        saveJourneyData(getClientData && getClientData.objKsecAPIResponse)
      );
      dispatch(saveProposal(serviceAccessData.vTokenCode));
    }
  }, [serviceAccessData, getClientData]);

  // Setting all field for validation form
  const validationForm = (f) => {
    const {
      title,
      firstname,
      middlename,
      lastname,
      dateofbirth,
      email,
      mobile,
      gender,
      marital,
      occupation,
      panNumber,
      uniqueId,
      CRNAccNo,
      addressLine1,
      addressLine2,
      pincode,
      city,
      crn,
  branchcode,
  spcode
    } = f;
    return (
      title !== "" &&
      firstname !== "" &&
      firstname.length > 3 &&
      lastname !== "" &&
      lastname.length > 2 &&
      email !== "" &&
      mobile !== "" &&
      mobile.length > 9 &&
      gender !== "" &&
      marital !== "" &&
      occupation !== "" &&
      panNumber !== "" &&
      panNumber.length > 5 &&
      uniqueId !== "" &&
      CRNAccNo !== "" &&
      addressLine1 !== "" &&
      addressLine2 !== "" &&
      pincode !== "" &&
      pincode.length > 4 &&
      city !== "" &&
      city.length > 2
    );
  };

  // Function to check the form validation
  const formValidation = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let error = errors;
    switch (name) {
      case "title":
        if (value.length === 0) {
          error.title = "title must not be empty!";
        } else {
          error.title = "";
        }
        break;
      case "firstname":
        if (value.length === 0) {
          error.firstname = "First name must not be empty!";
        } else if (value.length < 3) {
          error.firstname = "First name must be at least 3 characters long!";
        } else {
          error.firstname = "";
        }
        break;
      case "lastname":
        if (value.length === 0) {
          error.lastname = "Last name must not be empty!";
        } else if (value.length < 3) {
          error.lastname = "Last name must be at least 3 characters long!";
        } else {
          error.lastname = "";
        }
        break;
      case "dateofbirth":
        if (value.length === 0) {
          error.dateofbirth = "Date of birth must not be empty!";
        } else {
          error.dateofbirth = "";
        }
        break;
      case "email":
        error.email = new RegExp(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ).test(value)
          ? ""
          : "Email is not valid!";
        break;
      case "mobile":
        if (value.length === 0) {
          error.mobile = "Mobile must not be empty!";
        } else if (value.length < 10) {
          error.mobile = "Mobile must be at least 10 digit !";
        } else if (value.length > 10) {
          error.mobile = "Mobile must not more then  10 digit !";
        } else {
          error.mobile = "";
        }
        break;
      case "gender":
        if (value.length === 0) {
          error.gender = "gender must not be empty!";
        } else {
          error.gender = "";
        }
        break;
      case "material":
        if (value.length === 0) {
          error.material = "Material must not be empty!";
        } else {
          error.material = "";
        }
        break;
      case "occupation":
        if (value.length === 0) {
          error.occupation = "Occupation must not be empty!";
        } else {
          error.occupation = "";
        }
        break;
      case "panNumber":
        if (value.length === 0) {
          error.panNumber = "Pan number must not be empty!";
        } else {
          error.panNumber = "";
        }
        break;
      case "uniqueId":
        if (value.length === 0) {
          error.uniqueId = "Unique Id must not be empty!";
        } else {
          error.uniqueId = "";
        }
        break;
      case "CRNAccNo":
        if (value.length === 0) {
          error.CRNAccNo = "CRN Account number must not be empty!";
        } else {
          error.CRNAccNo = "";
        }
        break;
      case "addressLine1":
        if (value.length === 0) {
          error.addressLine1 = "Address Line 1 must not be empty!";
        } else {
          error.addressLine1 = "";
        }
        break;
      case "addressLine2":
        if (value.length === 0) {
          error.addressLine2 = "Address Line 2 must not be empty!";
        } else {
          error.addressLine2 = "";
        }
        break;
      case "pincode":
        if (value.length === 0) {
          error.pincode = "Pin code must not be empty!";
        } else if (value.length < 5) {
          error.pincode = "Pin code must not be of 6 digit!";
        } else if (value.length < 6) {
          error.pincode = "Pin code must not be more then 6 digit!";
        } else {
          error.pincode = "";
        }
        break;
      case "city":
        if (value.length === 0) {
          error.city = "City must not be empty!";
        }
        if (value.length < 2) {
          error.city = "City must at least 3 digit!";
          error.city = "";
        }
        break;
      default:
        break;
    }
    return error;
  };

  // Handle change for all input and select field
  const handleInputChange = (event) => {
    let { name, value } = event.target;
    let error = formValidation(event);
    setErrors(error);
    setField({
      ...field,
      [name]: value,
    });
  };

  // Form Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(errors)) {
    } else {
      console.error("Invalid Form", errors);
    }
  };

  // Handle change for date of birth field
  const handleChange = (newValue) => {
    setField({
      ...field,
      ["dateofbirth"]: newValue,
    });
  };

  let valid = validationForm(field);

  const handleChange2 = (event) => {
    setOpt(event.target.value);
  };
  return (
    <main className="main">
      <Header />
      <HeaderNav />
      <section className="journeyWrapper">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <h2 className="journeyTitle">Kotak Group Accident Protect</h2>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="backWrap">
                  <Link to={AllRoutes.LANDING_PAGE}>
                    <button className="backButton">
                      <img src={ArrowBackIcon} alt="back arrow" />
                      <span>Back</span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className={`accordianWrapper ${classes.root}`}>
                  <Accordion defaultExpanded={true}>
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
                        <div className="sumInsuredTab">
                          <span className="sumText">Sum Insured</span>
                          <span className="redText">
                            Up to ₹ {policyData && policyData.totalSumInsured}
                          </span>
                        </div>
                        <div className="sumInsuredTab">
                          <span className="sumText">
                            Total Premium (Excluding Taxes)
                          </span>
                          <span className="redText">
                            ₹ {policyData && policyData.premium}
                          </span>
                        </div>
                        <div className="sumInsuredTab">
                          <span className="sumText">Policy Term</span>
                          <span className="redText">1 Year</span>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion defaultExpanded={true}>
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
                        Proposer Details
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="fieldWrap">
                        <div className="row">
                          <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                            <FormControl
                              variant="filled"
                              sx={{
                                width: "100%",
                              }}
                            >
                              <InputLabel id="demo-simple-select-filled-label">
                                Title
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                fullWidth
                                className={classes.formInputSelect}
                                IconComponent={newIcon}
                                onChange={handleInputChange}
                                value={field.title}
                                name="title"
                                defaultValue=""
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value={"Mr"}>Mr</MenuItem>
                                <MenuItem value={"Mrs"}>Mrs</MenuItem>
                                <MenuItem value={"Miss"}>Miss</MenuItem>
                                <MenuItem value={"Dr"}>Dr</MenuItem>
                                <MenuItem value={"NA"}>Other</MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                            <InputText
                              className={classes.formInput}
                              id="filled-basic"
                              label="First Name"
                              variant="filled"
                              fullWidth
                              onChange={handleInputChange}
                              value={field.firstname}
                              name="firstname"
                              required={true}
                              error={errors.firstname.length > 0 ? true : false}
                              errorText={errors.firstname && errors.firstname}
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                            <InputText
                              className={classes.formInput}
                              id="filled-basic"
                              label="Middle Name"
                              variant="filled"
                              fullWidth
                              onChange={handleInputChange}
                              value={field.middlename}
                              name="middlename"
                              error={errors.middlename.length > 0 && true}
                              errorText={errors.middlename && errors.middlename}
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                            <InputText
                              className={classes.formInput}
                              id="filled-basic"
                              label="Last Name"
                              variant="filled"
                              fullWidth
                              onChange={handleInputChange}
                              value={field.lastname}
                              name="lastname"
                              required={true}
                              error={errors.lastname.length > 0 && true}
                              errorText={errors.lastname && errors.lastname}
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <Stack spacing={3}>
                                <DesktopDatePicker
                                  renderInput={(props) => (
                                    <TextField
                                      error={false}
                                      {...props}
                                      name="dateofbirth"
                                      onChange={handleInputChange}
                                    />
                                  )}
                                  label="Date of Birth"
                                  inputFormat="MM/dd/yyyy"
                                  value={
                                    field.dateofbirth
                                      ? field.dateofbirth
                                      : new Date()
                                  }
                                  onChange={handleChange}
                                  name="dateofbirth"
                                  error={false}
                                />
                              </Stack>
                            </LocalizationProvider>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                            <InputText
                              className={classes.formInput}
                              id="filled-basic"
                              label="Email"
                              variant="filled"
                              fullWidth
                              onChange={handleInputChange}
                              value={field.email}
                              name="email"
                              required={true}
                              error={errors.email.length > 0 && true}
                              errorText={errors.email && errors.email}
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                            <InputText
                              className={classes.formInput}
                              id="filled-basic"
                              label="Mobile Number"
                              variant="filled"
                              fullWidth
                              onChange={handleInputChange}
                              value={field.mobile}
                              name="mobile"
                              required={true}
                              error={errors.mobile.length > 0 ? true : false}
                              errorText={errors.mobile && errors.mobile}
                              type="number"
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                            <FormControl
                              variant="filled"
                              sx={{
                                width: "100%",
                              }}
                            >
                              <InputLabel id="demo-simple-select-filled-label">
                                Gender*
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                onChange={handleInputChange}
                                value={field.gender}
                                name="gender"
                                fullWidth
                                className={classes.formInputSelect}
                                IconComponent={newIcon}
                                defaultValue=""
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value={"Male"}>Male</MenuItem>
                                <MenuItem value={"Female"}>Female</MenuItem>
                                <MenuItem value={"Other"}>Other</MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                            <InputText
                              className={classes.formInput}
                              id="filled-basic"
                              label="Marital"
                              variant="filled"
                              fullWidth
                              onChange={handleInputChange}
                              value={field.marital}
                              name="marital"
                              required={true}
                              error={errors.marital.length > 0 ? true : false}
                              errorText={errors.marital && errors.marital}
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                            <InputText
                              className={classes.formInput}
                              id="filled-basic"
                              label="Occupation"
                              variant="filled"
                              fullWidth
                              onChange={handleInputChange}
                              value={field.occupation}
                              name="occupation"
                              required={true}
                              error={
                                errors.occupation.length > 0 ? true : false
                              }
                              errorText={errors.occupation && errors.occupation}
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                            <InputText
                              className={classes.formInput}
                              id="filled-basic"
                              label="PAN"
                              variant="filled"
                              fullWidth
                              onChange={handleInputChange}
                              value={field.panNumber}
                              name="panNumber"
                              required={true}
                              error={errors.panNumber.length > 0 ? true : false}
                              errorText={errors.panNumber && errors.panNumber}
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                            <InputText
                              className={classes.formInput}
                              id="filled-basic"
                              label="Unique ID"
                              variant="filled"
                              fullWidth
                              onChange={handleInputChange}
                              value={field.uniqueId}
                              name="uniqueId"
                              required={true}
                              error={errors.uniqueId.length > 0 ? true : false}
                              errorText={errors.uniqueId && errors.uniqueId}
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                            <InputText
                              className={classes.formInput}
                              id="filled-basic"
                              label="CRN/ Account No"
                              variant="filled"
                              fullWidth
                              onChange={handleInputChange}
                              value={field.CRNAccNo}
                              name="CRNAccNo"
                              required={true}
                              error={errors.CRNAccNo.length > 0 ? true : false}
                              errorText={errors.CRNAccNo && errors.CRNAccNo}
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                            <InputText
                              className={classes.formInput}
                              id="filled-basic"
                              label="Address Line 1"
                              variant="filled"
                              fullWidth
                              onChange={handleInputChange}
                              value={field.addressLine1}
                              name="addressLine1"
                              required={true}
                              error={
                                errors.addressLine1.length > 0 ? true : false
                              }
                              errorText={
                                errors.addressLine1 && errors.addressLine1
                              }
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                            <InputText
                              className={classes.formInput}
                              id="filled-basic"
                              label="Address Line 2"
                              variant="filled"
                              fullWidth
                              onChange={handleInputChange}
                              value={field.addressLine2}
                              name="addressLine2"
                              required={true}
                              error={
                                errors.addressLine2.length > 0 ? true : false
                              }
                              errorText={
                                errors.addressLine2 && errors.addressLine2
                              }
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                            <InputText
                              className={classes.formInput}
                              id="filled-basic"
                              label="Pin Code"
                              variant="filled"
                              fullWidth
                              onChange={handleInputChange}
                              value={field.pincode}
                              name="pincode"
                              required={true}
                              error={errors.pincode.length > 0 ? true : false}
                              errorText={errors.pincode && errors.pincode}
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                            <InputText
                              className={classes.formInput}
                              id="filled-basic"
                              label="City"
                              variant="filled"
                              fullWidth
                              onChange={handleInputChange}
                              value={field.city}
                              name="city"
                              required={true}
                              error={errors.city.length > 0 ? true : false}
                              errorText={errors.city && errors.city}
                            />
                          </div>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="whiteCard">
                  <div className="reffWrap">
                    <div className="row">
                    
                    <div className="reffWrap">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                          <InputText
                            className={classes.formInput}
                            id="filled-basic"
                            label="Branch Code*"
                            variant="filled"
                            fullWidth
                            name={"branchcode"}
                            value={field.branchcode}
                            onChange={handleInputChange}
                            error={errors.branchcode.length > 0 ? true : false}
                              errorText={errors.branchcode && errors.branchcode}
                          />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                          <InputText
                            className={classes.formInput}
                            id="filled-basic"
                            label="Employee/SP Code"
                            variant="filled"
                            fullWidth
                            name={"spcode"}
                            value={field.spcode}
                            onChange={handleInputChange}
                            error={errors.spcode.length > 0 ? true : false}
                              errorText={errors.spcode && errors.spcode}
                          />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                          <InputText
                            className={classes.formInput}
                            id="filled-basic"
                            label="CRN"
                            variant="filled"
                            name="crn"
                            fullWidth
                            value={field.crn}
                            onChange={handleInputChange}
                            error={errors.crn.length > 0 ? true : false}
                              errorText={errors.crn && errors.city}
                          />
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="btnWrap">
                    {valid === false ? (
                      <button className="btnProceed" disabled={true}>
                        Proceed
                      </button>
                    ) : (
                      <Link to={AllRoutes.FAMILY_RELATIONSHIP_DETAILS} state={{
                        policyData: dataToNext,
                        checkOptional: opt,
                      }}>
                        <button type="submit" className="btnProceed">
                          Proceed
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default JourneyStepFirst;
