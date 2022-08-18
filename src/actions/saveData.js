import {
    SAVE_PREMIUM_DATA_SUCCESS
} from './types';

// Store Journey Pages data
export const savePremiumData = (data) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_PREMIUM_DATA_SUCCESS,
            payload: data
        })
    }
}
