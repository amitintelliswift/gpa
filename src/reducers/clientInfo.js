import {
    BPOS_USER_SERVICE_SUCCESS,
    BPOS_USER_SERVICE_ERROR,

    GET_CLIENT_INFO_SUCCESS,
    GET_CLIENT_INFO_ERROR,
} from '../actions/types';

const initialState = {
    serviceAccessCode:{},
    getClientInfo:{
        getInfo : {},
        loading : true 
    }
}

const auth = (state = initialState, action) => {

    switch (action.type) {

        case BPOS_USER_SERVICE_SUCCESS:
            return {
                ...state,
                serviceAccessCode: action.payload,
            }
        case BPOS_USER_SERVICE_ERROR:
            return {
                ...state,
                serviceAccessCode: action.payload,
            }

        case GET_CLIENT_INFO_SUCCESS:
            return {
                ...state,
                getClientInfo: action.payload,
            }
        case GET_CLIENT_INFO_ERROR:
            return {
                ...state,
                getClientInfo: action.payload,
            }
              
        default:
            return state
    }

}

export default auth;