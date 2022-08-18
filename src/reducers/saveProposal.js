import {
   SAVE_DATA_ERROR,
   SAVE_DATA_LOADING,
   SAVE_DATA_SUCCESS,
   STORE_JOURNEY_DATA_SUCCESS,
} from '../actions/types';

const initialState = {
    saveProposalData: {},
    storeJourneyData:{},
}

const saveProposal = (state = initialState, action) => {

    switch (action.type) {

        case SAVE_DATA_LOADING:
            return {
                ...state,
                saveProposalData: action.payload,
            }
        case SAVE_DATA_SUCCESS:
            return {
                ...state,
                saveProposalData: action.payload,
            }
        case SAVE_DATA_ERROR:
            return {
                ...state,
                saveProposalData: action.payload,
            }
        case STORE_JOURNEY_DATA_SUCCESS:
            return {
                ...state,
                storeJourneyData:action.payload
            }

        default:
            return state
    }

}

export default saveProposal;