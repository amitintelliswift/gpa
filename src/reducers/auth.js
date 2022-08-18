import {
    CLIENT_CODE_LOADING,
    CLIENT_CODE_SUCCESS,
    CLIENT_CODE_ERROR,
} from '../actions/types';

const initialState = {
    clientcode:{}
}

const auth = (state = initialState, action) => {

    switch (action.type) {

        case CLIENT_CODE_LOADING:
            return {
                ...state,
                clientcode: action.payload.data,
            }
        case CLIENT_CODE_SUCCESS:
            return {
                ...state,
                clientcode: action.payload,
            }
        case CLIENT_CODE_ERROR:
            return {
                ...state,
                clientcode: action.payload,
            }        
        default:
            return state
    }

}

export default auth;