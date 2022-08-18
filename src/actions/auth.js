import {
    CLIENT_CODE_SUCCESS,
    CLIENT_CODE_ERROR

} from './types'
import axios from 'axios';

const setToken = (token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
};

export const getToken = () => {
    const now = new Date(Date.now()).getTime();
    const timeAllowed = 1000 * 60 * 30;
    const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
    if (timeSinceLastLogin < timeAllowed) {
        return localStorage.getItem("token");
    }
};

const tokenUrl = `https://kgibridgeuat.kotakmahindrageneralinsurance.com/KOTAK_FIG_NETBANKING_SERVICES/wsInvokeManagementServices.svc/Fn_Token_verification/Kgisvcnetbanking`;

// Get User Auth Client Code
export const getAuthClientKey = (token) => {
    return (dispatch) => {
        return axios.post(
            tokenUrl,
            {
                tokenno: token,
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
                setToken(data.clientcode);
                console.log(data.tokenno,"lllllllll")
                dispatch({
                    type: CLIENT_CODE_SUCCESS,
                    payload: data
                })
            })
            .catch(error => dispatch(
                {
                    type: CLIENT_CODE_ERROR,
                    payload: error
                }));
    };
};