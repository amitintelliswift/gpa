import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import auth from './reducers/auth';
import clientInfo from './reducers/clientInfo';
import getPartnerTokenDetails from './reducers/getPartnerTokenDetails';
import otp from './reducers/otp';
import saveProposal from './reducers/saveProposal';
import saveData from './reducers/saveData';

const w = window;
let composeEnhancers = compose;
const middleware = [thunk];
composeEnhancers =
    typeof w !== 'undefined' && w['__REDUX_DEVTOOLS_EXTENSION__']
        ? w['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({})
        : compose;

const rootReducer = combineReducers({
    auth: auth,
    clientInfo: clientInfo,
    getPartnerTokenDetails: getPartnerTokenDetails,
    otp: otp,
    saveProposal: saveProposal,
    saveData:saveData,
})
const appReducer = {
}

export default createStore(
    rootReducer,
    appReducer,
    composeEnhancers(
        applyMiddleware(
            ...middleware
        )
    )
)