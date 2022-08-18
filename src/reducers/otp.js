import {
    VERIFY_OTP_SUCCESS, 
    VERIFY_OTP_ERROR, 
    VERIFY_OTP_LOADING,
    GENERATE_OTP_SUCCESS,
    GENERATE_OTP_ERROR,
    GENERATE_OTP_LOADING,

} from '../actions/types';

const initialState = {
    generateOTPData: {},
    verifyOTPData : {}
}

const otp = (state = initialState, action) => {

    switch (action.type) {

        case VERIFY_OTP_SUCCESS:
            return {
                ...state,
                verifyOTPData: action.payload,
            }
        case VERIFY_OTP_ERROR:
            return {
                ...state,
                verifyOTPData: action.payload,
            }
        case VERIFY_OTP_LOADING:
            return {
                ...state,
                verifyOTPData: action.payload,
            }


        case GENERATE_OTP_LOADING:
            return {
                ...state,
                generateOTPData: action.payload,
            }
        case GENERATE_OTP_SUCCESS:
            return {
                ...state,
                generateOTPData: action.payload,
            }
        case GENERATE_OTP_ERROR:
            return {
                ...state,
                generateOTPData: action.payload,
            }

        default:
            return state
    }

}

export default otp;