import {
    VERIFY_OTP_SUCCESS, 
    VERIFY_OTP_ERROR, 
    GENERATE_OTP_SUCCESS,
    GENERATE_OTP_ERROR,
} from './types'
import axios from 'axios';

const generateOTPUrl = 'https://kgibridgeuat.kotakmahindrageneralinsurance.com/KOTAK_FIG_NETBANKING_SERVICES/wsInvokeManagementServices.svc/Fn_Generate_OTP/BP000001';
export const generateOTP = (premium) => {
    return (dispatch) => {
        return axios.post(
            generateOTPUrl,
            {
                "Client_DP_ID": "ABQE2",
                "Selected_Premium": premium,
                "Email_ID": "diwakar.mishra@kotak.com",
                "Mobile_Number": "9970978731",
                "RqUID": "020822000740"
            },
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: GENERATE_OTP_SUCCESS,
                    payload: data
                })
            })
            .catch(error => dispatch(
                {
                    type: GENERATE_OTP_ERROR,
                    payload: error
                }));
    };
};


const verifyOTPUrl = 'https://kgibridgeuat.kotakmahindrageneralinsurance.com/KOTAK_FIG_NETBANKING_SERVICES/wsInvokeManagementServices.svc/Fn_Verify_OTP/BP000001';

export const verifyOTP = (field) => {
    return (dispatch) => {
        return axios.post(
            verifyOTPUrl,
            {
                "Client_DP_ID": "ABQE2",
                "Email_ID": "diwakar.mishra@kotak.com",
                "Mobile_Number": "9970978731",
                "ResendOTP": "No",
                "InputOTP": field,
                "RqUID": "230522000006"
            },
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: VERIFY_OTP_SUCCESS,
                    payload: data
                })
            })
            .catch(error => dispatch(
                {
                    type: VERIFY_OTP_ERROR,
                    payload: error
                }));
    };
};

