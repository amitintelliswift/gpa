import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import * as AllRoutes from './routes';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import history from './history';
import { Provider } from 'react-redux/es/exports';
import store from './store';
import './index.css';
// import Thankyoupage from './components/Journey/Dealer/Thankyoupage';
import LoadingImage from './static/images/loading.svg';

const LandingPage = React.lazy(() => import('./components/LandingPage/LandingPage'));
const JourneyStepFirst = React.lazy(() => import('./components/Journey/Dealer/JourneyStepFirst'));
const SelfMemberDetails = React.lazy(() => import('./components/Journey/Dealer/SelfMemberDetails'));

const FamilyRelationship = React.lazy(() => import('./components/Journey/Dealer/FamilyRelationship'));


const PaymentDetails = React.lazy(() => import('./components/Journey/Dealer/PaymentDetails'));
const Thankyou = React.lazy(() => import('./components/Journey/Dealer/Thankyou'));
const Thankyoupage= React.lazy(() => import('./components/Journey/Dealer/Thankyoupage'));

const customURL = '?cid=93FAF143-A562-49CD-B545-102193AC5ACC&source=1&TokenNo=EBF1F0A0-3972-4E91-A9D8-41536D5F1FA2&isKsec=1&partnerToken=14601263';
history.push({
  pathname: AllRoutes.LANDING_PAGE,
  search: customURL
})

const LoadingComponent = () => {
  return (
    <div className='loadingWrap'>
      <img src={LoadingImage} alt="loading" />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<LoadingComponent />}>
        <Router history={history}>
          <Routes>

            <Route
              exact
              path={`${AllRoutes.LANDING_PAGE}`}
              element={<LandingPage />}
            />

            <Route
              exact
              path={AllRoutes.DEALER_JOURNEY_STEP_ONE}
              element={<JourneyStepFirst />}
            />
            <Route
              exact
              path={AllRoutes.SELF_MEMBER_DETAILS}
              element={<SelfMemberDetails />}
            />

           

            <Route
              exact
              path={AllRoutes.FAMILY_RELATIONSHIP_DETAILS}
              element={<FamilyRelationship />}
            />

           

           

            <Route
              exact
              path={AllRoutes.PAYMENT_DETAILS}
              element={<PaymentDetails />}
            />

            <Route
              exact
              path={AllRoutes.THANKYOU}
              element={<Thankyou />}
            />
             <Route
              exact
              path={AllRoutes.Thankyou1}
              element={<Thankyoupage/>}
            />
          </Routes>
        </Router>
      </Suspense>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
