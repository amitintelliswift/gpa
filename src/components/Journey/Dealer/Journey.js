import React, { useState } from 'react';
import '../../LandingPage/LandingPage.css';
import './JourneyStep.css';
// import Header from '../../Layout/Header/Header';
// import HeaderNav from '../../Layout/Header/HeaderNav';

import JourneyStepFirst from './JourneyStepFirst';
import SelfMemberDetails from './SelfMemberDetails';
import FamilyMemberDetails from './FamilyMemberDetails';
import FamilyRelationship from './FamilyRelationship';
import NomineeDetails from './NomineeDetails';
import PremiumDetails from './PremiumDetails';
import PaymentDetails from './PaymentDetails';

const Journey = (props) => {
    const [page, setPage] = useState(0);
    const conditionalComponent = () => {
        switch (page) {
            case 0:
                return <JourneyStepFirst />
            case 1:
                return <SelfMemberDetails />
            case 2:
                return <FamilyMemberDetails />
            case 3:
                return <FamilyRelationship />
            case 4:
                return <NomineeDetails />
            case 5:
                return <PremiumDetails />
            case 6:
                return <PaymentDetails />
            default:
                return <JourneyStepFirst />
        }
    }
    function handleSubmit() {
        setPage(page + 1);
    }
    return (
        <main className='main'>
            <section className='journeyContainer'>
                {conditionalComponent()}
                {
                    page > 0 && <button onClick={() => setPage(page - 1)}>Back</button>
                }

                <button onClick={handleSubmit}>
                    {page === 0 || page === 1 ? "Next" : "Submit"}
                </button>
            </section>
        </main>
    )
}

export default Journey;