import {
    BPOS_USER_SERVICE_SUCCESS,
    BPOS_USER_SERVICE_ERROR,

    GET_CLIENT_INFO_SUCCESS,
    GET_CLIENT_INFO_ERROR,

} from './types'
import axios from 'axios';


// Get Token API CALL
const bodyData = {
    "vLoginEmailId": "ZUN2RGJ6dkUveG1HTzk1Kzd1Z2ljZz09",
    "vPassword": "Zk1ObTMvN3dmaWozNEFUSk5menovUT09"
}
const serviceURL = 'https://kgibridgeuat.kotakmahindrageneralinsurance.com/KOTAK_FIG_NETBANKING_SERVICES/wsInvokeManagementServices.svc/Fn_Get_Service_Access_Token_For_User';

export const getBOPSToken = () => {
    return (dispatch) => {
        return axios.post(
            serviceURL,
            bodyData,
            {
                headers: {
                    vRanKey: "4658233666271180",
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: BPOS_USER_SERVICE_SUCCESS,
                    payload: data
                })
            })
            .catch(error => dispatch(
                {
                    type: BPOS_USER_SERVICE_ERROR,
                    payload: error
                }));
    };
};


// Get Client Info Data
const clientInfoURL = 'https://kgibridgeuat.kotakmahindrageneralinsurance.com/KOTAK_FIG_NETBANKING_SERVICES/wsInvokeManagementServices.svc/GetLoginInfo/BP000001'
export const getClientInfo = (vTokenCode, premium) => {
    return (dispatch) => {
        return axios.post(
            clientInfoURL,
            {
                "SourceApp": "MobileApp",
                "ReqID": "020822000740",
                "Client_DP_ID": "AVPT5",
                "Selected_Premium": premium,
                "RqDatetime": "27-05-2022",
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
                "vSource": "1"
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
                    type: GET_CLIENT_INFO_SUCCESS,
                    payload: data
                })
            })
            .catch(error => dispatch(
                {
                    type: GET_CLIENT_INFO_ERROR,
                    payload: error
                }));
    };
};
