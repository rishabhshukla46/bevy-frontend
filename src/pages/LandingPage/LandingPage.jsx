import React from 'react';
import './LandingPage.css';
import SignIn from '../../components/SignIn/SignIn';
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';

function LandingPage() {
    return (
        <div className='landing-page'>
            <HeaderLogo />
            <SignIn />
        </div>
    )
}

export default LandingPage;
