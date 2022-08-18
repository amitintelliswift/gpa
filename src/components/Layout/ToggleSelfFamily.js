import React, { useState } from 'react';
const ToggleSelfFamily = (props) => {
    const [active, setActive] = useState('self');
    const handleSelf = (event) => {
        setActive(event.target.id)
    }
    const handleFamily = (event) => {
        setActive(event.target.id)
    }
    return (
        <div className='grayBar'>
            <div className='queTest'>Who would you like to insure?</div>
            <div className='optionWrap'>
                <button
                    className={`btnSelf ${active === 'self' ? 'btnSelected' : ''}`}
                    onClick={handleSelf}
                    id={"self"}
                >
                    Self
                </button>
                <button
                    className={`btnSelf btnHidden ${active === 'family' ? 'btnSelected' : ''}`}
                    onClick={handleFamily}
                    id={"family"}
                >
                    Family
                </button>
            </div>
        </div>
    )
}
export default ToggleSelfFamily;