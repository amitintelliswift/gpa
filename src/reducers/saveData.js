import {
    SAVE_DATA_FOR_NOMINEE_ERROR,
    SAVE_DATA_FOR_NOMINEE_LOADING,
    SAVE_DATA_FOR_NOMINEE_SUCCESS,
    SAVE_PREMIUM_DATA_SUCCESS,
    SAVE_PREMIUM_DATA_ERROR
} from '../actions/types';

const initialState = {
    saveData: {},
    savePremiumData: {}
}

const saveData = (state = initialState, action) => {

    switch (action.type) {

        case SAVE_DATA_FOR_NOMINEE_LOADING:
            return {
                ...state,
                saveData: action.payload,
            }
        case SAVE_DATA_FOR_NOMINEE_SUCCESS:
            return {
                ...state,
                saveData: action.payload,
            }
        case SAVE_DATA_FOR_NOMINEE_ERROR:
            return {
                ...state,
                saveData: action.payload,
            }

        case SAVE_PREMIUM_DATA_SUCCESS:
            return {
                ...state,
                savePremiumData: action.payload,
            }

        case SAVE_PREMIUM_DATA_ERROR:
            return {
                ...state,
                savePremiumData: action.payload,
            }

        default:
            return state
    }

}

export default saveData;