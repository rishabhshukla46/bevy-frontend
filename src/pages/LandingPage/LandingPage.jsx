import React, {useState} from 'react';
import './LandingPage.css';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import { Button } from '@material-ui/core';

function LandingPage() {
    const [toggle, setToggle] = useState(true);

    const content = toggle ? <SignIn /> : <SignUp />
    
    return (
        <div className='landing-page'>
            <HeaderLogo />
            {content}
            <div className={`not-a-user-button ${toggle}`}>
                <Button 
                    className='toggle-button' 
                    variant='contained' onClick={() => setToggle(!toggle)}
                >
                    Not a user ? sign up
                </Button>
            </div>
        </div>
    )
}

export default LandingPage;
