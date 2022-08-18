import React, { useState, useEffect } from "react";
import {
  // useDispatch,
  useSelector,
} from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../LandingPage/LandingPage.css";
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
import InputText from "../../Elements/InputText";
import { Link } from "react-router-dom";
import * as AllRoutes from "../../../routes";
import history from "../../../history";

import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

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

const fields = {
  title: "",
  fullname: "",
  isSalaried: "",
  nomineeName: "",
  nomineeRelationship: "",
  dateofbirth: "",
  occupation: "",
  nomineeDob: "",
  memberid:""
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
const SelfMemberDetails = (props) => {
  const classes = useStyles();
  const [urlParam, setUrlParam] = useState(false);
  const storeJourneyData = useSelector(
    (state) => state.saveProposal.storeJourneyData
  );
  const [field, setField] = useState(fields);
  const [errors, setErrors] = useState(fields);

  useEffect(() => {
    const customURL =
      "?cid=93FAF143-A562-49CD-B545-102193AC5ACC&source=1&TokenNo=EBF1F0A0-3972-4E91-A9D8-41536D5F1FA2&isKsec=1&partnerToken=14601263";
    history.push({
      pathname: AllRoutes.SELF_MEMBER_DETAILS,
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

  useEffect(() => {
    if (storeJourneyData) {
      setField({
        title: storeJourneyData.Title,
        fullname: storeJourneyData.CustomerFullName,
        isSalaried:
          storeJourneyData.Occupation === ""
            ? "No"
            : storeJourneyData.Occupation,
        nomineeName: storeJourneyData.NomineeName,
        nomineeRelationship: storeJourneyData.NomineeRelation,
        dateofbirth: storeJourneyData.CustomerDob,
        occupation: storeJourneyData.Occupation,
        memberid: storeJourneyData.Member_Unique_ID,
        nomineeDob: new Date(),
      });
    }
  }, [storeJourneyData]);

  // Setting all field for validation form
  const validationForm = (f) => {
    const { title, fullname, nomineeName, nomineeRelationship } = f;
    return (
      title !== "" &&
      fullname !== "" &&
      nomineeName !== "" &&
      nomineeRelationship !== ""
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
      case "fullname":
        if (value.length === 0) {
          error.fullname = "Customer name must not be empty!";
        } else if (value.length < 3) {
          error.fullname = "Customer name must be at least 3 characters long!";
        } else {
          error.fullname = "";
        }
        break;
      case "nomineeName":
        if (value.length === 0) {
          error.nomineeName = "Nominee name must not be empty!";
        } else if (value.length < 3) {
          error.nomineeName =
            "Nominee name must be at least 3 characters long!";
        } else {
          error.nomineeName = "";
        }
        break;
      case "nomineeRelationship":
        if (value.length === 0) {
          error.nomineeRelationship = "Nominee relationship must not be empty!";
        } else if (value.length < 3) {
          error.nomineeRelationship =
            "Nominee relationship must be at least 3 characters long!";
        } else {
          error.nomineeRelationship = "";
        }
        break;
        case "occupation":
        if (value.length === 0) {
          error.occupation = "occupation  must not be empty!";
        } else if (value.length < 3) {
          error.occupation =
            "occupation  must be at least 3 characters long!";
        } else {
          error.occupation = "";
        }
        break;
        case "memberunique":
        if (value.length === 0) {
          error.memberid = "Member Unique ID  must not be empty!";
        } else if (value.length < 3) {
          error.memberid =
            "Member Unique ID  must be at least 3 characters long!";
        } else {
          error.occupation = "";
        }
        break;

      default:
        break;
    }
    return error;
  };

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

  const handleChangeNominee = (newValue) => {
    setField({
      ...field,
      ["nomineeDob"]: newValue,
    });
  };

  const handleChangeEntryDate = (newValue) => {
    setField({
      ...field,
      ["memberEntryDate"]: newValue,
    });
  };

  let valid = validationForm(field);
  const [agree, setAgree] = useState(false);
  const handleChange1 = (event) => {
    setAgree(event.target.checked)
}


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
                  <Link to={AllRoutes.FAMILY_RELATIONSHIP_DETAILS}>
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
                    <div className="heading">Self Member Details</div>
                    <div className="addonFields">
                      <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                            <InputText
                              className={classes.formInput}
                              id="filled-basic"
                              label="First Name"
                              variant="filled"
                              fullWidth
                              onChange={handleInputChange}
                              value={field.fullname}
                              name="firstname"
                              required={true}
                              error={errors.fullname.length > 0 ? true : false}
                              errorText={errors.fullname && errors.fullname}
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
                              label="Member unique id"
                              variant="filled"
                              fullWidth
                              onChange={handleInputChange}
                              value={field.memberid}
                              name="occupation"
                              required={true}
                              error={
                                errors.memberid.length > 0 ? true : false
                              }
                              errorText={errors.memberid && errors.memberid}
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
                              Is Insured Salaried or Non-Salaried *
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              value={field.isSalaried}
                              onChange={handleInputChange}
                              fullWidth
                              className={classes.formInputSelect}
                              IconComponent={newIcon}
                              name="isSalaried"
                              defaultValue=""
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={"Yes"}>Yes</MenuItem>
                              <MenuItem value={"No"}>No</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="addOnCard">
                    <div className="heading">Nominee Details</div>
                    <div className="addonFields">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                          <InputText
                            className={classes.formInput}
                            id="filled-basic"
                            label="Nomine Name"
                            variant="filled"
                            fullWidth
                            onChange={handleInputChange}
                            value={field.nomineeName}
                            name="nomineeName"
                            error={errors.nomineeName.length > 0 ? true : false}
                            errorText={errors.nomineeName && errors.nomineeName}
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
                                    name="nomineeDob"
                                    onChange={handleInputChange}
                                  />
                                )}
                                label="Nominee Date of Birth"
                                inputFormat="MM/dd/yyyy"
                                value={
                                  field.nomineeDob
                                    ? field.nomineeDob
                                    : new Date()
                                }
                                onChange={handleChangeNominee}
                                name="nomineeDob"
                                error={false}
                              />
                            </Stack>
                          </LocalizationProvider>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 marginBot15">
                          <InputText
                            className={classes.formInput}
                            id="filled-basic"
                            label="Nomine Relationship"
                            variant="filled"
                            fullWidth
                            onChange={handleInputChange}
                            value={field.nomineeRelationship}
                            name="nomineeRelationship"
                            error={
                              errors.nomineeRelationship.length > 0
                                ? true
                                : false
                            }
                            errorText={
                              errors.nomineeRelationship &&
                              errors.nomineeRelationship
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='termsWrap'>
                                    <input
                                        type="checkbox"
                                        onChange={handleChange1}
                                        value="agree"
                                        className='checkField'
                                    />
                                    <span className='termsText'>I agree to the <Link to="">terms & conditions</Link>.</span>
                                </div>


                  <div className="btnWrap">
                 
                                    {agree ?
                                        <Link to={AllRoutes.PAYMENT_DETAILS}>
                                            <button className='btnProceed'>Buy Now</button>
                                        </Link>
                                        :
                                        <button className='btnProceed' disabled={true}>Buy Now</button>
                                    }
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

export default SelfMemberDetails;
