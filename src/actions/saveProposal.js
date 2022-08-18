import {
    SAVE_DATA_ERROR,
    SAVE_DATA_SUCCESS,
    // STORE_JOURNEY_DATA_ERROR,
    STORE_JOURNEY_DATA_SUCCESS
} from './types';
import axios from 'axios';

// Save Proposal Data
const saveLinkURL = 'https://kgibridgeuat.kotakmahindrageneralinsurance.com/KOTAK_FIG_NETBANKING_SERVICES/wsInvokeManagementServices.svc/SaveGroupProductProposalDetails/BP000001';
export const saveProposal = (vTokenCode) => {
    return (dispatch) => {
        return axios.post(
            saveLinkURL,
            {
                "RqUID": "020822000739",
                "Client_DP_ID": "AVPT5",
                "Title": "Mr",
                "FirstName": "AVPT5 First Name",
                "MiddleName": "AVPT5 Middle Name",
                "LastName": "AVPT5 Last Name",
                "CustomerFullName": "AVPT5 Long Name",
                "CustomerDob": "1990-09-22",
                "CustomerGender": "M",
                "Marital_Status": "Married",
                "ProposerAddLine1": "KALYAN",
                "ProposerAddLine2": "RAJSTHAN",
                "ProposerAddLine3": "",
                "ProposerPinCode": "400067",
                "City": "12 G.B.",
                "State": "RAJASTHAN",
                "MobileNo": "9137036391",
                "EmailId": "kgi.avinash-singh@Kotak.com",
                "Payment_Mode": "Ledger",
                "Ledger_AC_No": "AVPT5     ",
                "Ledger_AC_Balance_Flag": "No",
                "Payment_Link": null,
                "KGI_Transaction_ID": null,
                "Sum_Insured": "2000",
                "Frequency": "Y",
                "Policy_Term": "1",
                "Selected_Premium": "2000",
                "BusinessType": "New",
                "CurrentPolicyStartDate": null,
                "CurrentPolicyEndDate": null,
                "KSLProposalNo": "120220802194406",
                "KGIPolicyStatus": "Active",
                "NomineeName": "teset",
                "NomineeDOB_Age": "1998-12-02",
                "NomineeAge": "23",
                "NomineeRelation": "Brother",
                "Occupation": "Others",
                "Occupation_if_Others": "Service",
                "Member_Unique_ID": "AVPT5     ",
                "Insured_Type": "Applicant",
                "PAN_Number": "AXYPS1815Q",
                "NoofLives": "1",
                "RM_Code": "ks1246",
                "RM_Name": "KS1246-KS1246-Fname ",
                "Source_System": "BSE Star",
                "Source_Channel": "Assisted",
                "RqDatetime": "01-08-2022 18:34:09",
                "ErrorMessage": null,
                "AdditionalColumn_1": null,
                "AdditionalColumn_2": null,
                "AdditionalColumn_3": null,
                "AdditionalColumn_4": null,
                "AdditionalColumn_5": null,
                "AdditionalColumn_6": null,
                "AdditionalColumn_7": null,
                "AdditionalColumn_8": null,
                "AdditionalColumn_9": null,
                "AdditionalColumn_10": null,
                "AdditionalColumn_11": null,
                "AdditionalColumn_12": null,
                "AdditionalColumn_13": null,
                "AdditionalColumn_14": null,
                "AdditionalColumn_15": null,
                "AdditionalColumn_16": null,
                "AdditionalColumn_17": null,
                "AdditionalColumn_18": null,
                "AdditionalColumn_19": null,
                "AdditionalColumn_20": null,
                "IsKescFlow": "1",
                "GroupProductName": "GPA",
                "IMDCode": "1101550000"
            },
            {
                headers: {
                    vTokenCode: vTokenCode,
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: SAVE_DATA_SUCCESS,
                    payload: data
                })
            })
            .catch(error => dispatch(
                {
                    type: SAVE_DATA_ERROR,
                    payload: error
                }));
    };
};


// Store Journey Pages data
export const saveJourneyData = (data) => {
    return (dispatch) => {
        dispatch({
            type: STORE_JOURNEY_DATA_SUCCESS,
            payload: data
        })
    }
}