import {
    GET_PARTNER_TOKEN_DETAILS_SUCCESS,
    GET_PARTNER_TOKEN_DETAILS_ERROR,
    GET_IMD_WISE_GROUP_PRODUCT_CODE_SUCCESS,
    GET_IMD_WISE_GROUP_PRODUCT_CODE_ERROR,

} from './types'
import axios from 'axios';

const bodyData = {"vTokenId":"XXX1000","visNetBanking":"N","vIMDCODE":""}
const serviceURL = 'https://kgibridgeuat.kotakmahindrageneralinsurance.com/KOTAK_FIG_NETBANKING_SERVICES/wsInvokeManagementServices.svc/Fn_Get_Partner_Token_Details';

export const getPartnerTokenDetails = () => {
    return (dispatch) => {
        return axios.post(
            serviceURL,
            bodyData,
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
                    type: GET_PARTNER_TOKEN_DETAILS_SUCCESS,
                    payload: data
                })
            })
            .catch(error => dispatch(
                {
                    type: GET_PARTNER_TOKEN_DETAILS_ERROR,
                    payload: error
                }));
    };
};


// GetIMDWiseGroupProductCode
export const getIMDWiseGroupProductCode = (vParentIntermediaryCode) => {
    const productCodeUrl = `https://kgibridgeuat.kotakmahindrageneralinsurance.com/KOTAK_FIG_NETBANKING_SERVICES/wsInvokeManagementServices.svc/GetIMDWiseGroupProductCode/1101550000/GPA`;
    return (dispatch) => {
        return axios.post(
            productCodeUrl,
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
                    type: GET_IMD_WISE_GROUP_PRODUCT_CODE_SUCCESS,
                    payload: data
                })
            })
            .catch(error => dispatch(
                {
                    type: GET_IMD_WISE_GROUP_PRODUCT_CODE_ERROR,
                    payload: error
                }));
    };
}