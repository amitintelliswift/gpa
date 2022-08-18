import {
    GET_PARTNER_TOKEN_DETAILS_SUCCESS,
    GET_PARTNER_TOKEN_DETAILS_ERROR,
    GET_PARTNER_TOKEN_DETAILS_LOADING,
    GET_IMD_WISE_GROUP_PRODUCT_CODE_SUCCESS,
    GET_IMD_WISE_GROUP_PRODUCT_CODE_LOADING,
    GET_IMD_WISE_GROUP_PRODUCT_CODE_ERROR

} from '../actions/types';

const initialState = {
    partnerTokenDetails: {},
    wiseGroupProductCode: {},
}

const tokenDetail = (state = initialState, action) => {

    switch (action.type) {

        case GET_PARTNER_TOKEN_DETAILS_SUCCESS:
            return {
                ...state,
                partnerTokenDetails: action.payload,
            }
        case GET_PARTNER_TOKEN_DETAILS_ERROR:
            return {
                ...state,
                partnerTokenDetails: action.payload,
            }
        case GET_PARTNER_TOKEN_DETAILS_LOADING:
            return {
                ...state,
                partnerTokenDetails: action.payload,
            }

        case GET_IMD_WISE_GROUP_PRODUCT_CODE_SUCCESS:
            return {
                ...state,
                wiseGroupProductCode: action.payload,
            }
        case GET_IMD_WISE_GROUP_PRODUCT_CODE_ERROR:
            return {
                ...state,
                wiseGroupProductCode: action.payload,
            }
        case GET_IMD_WISE_GROUP_PRODUCT_CODE_LOADING:
            return {
                ...state,
                wiseGroupProductCode: action.payload,
            }

        default:
            return state
    }

}

export default tokenDetail;