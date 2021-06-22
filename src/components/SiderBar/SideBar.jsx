import React, {useState, useEffect} from 'react';
import './SideBar.css';
import tony from '../../images/tony.jpg';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { Button, TextField, MenuItem } from '@material-ui/core';

function SideBar({user}) {
    const {id, name, userId, userEmail, userPhone, notify} = user;
    const [update, setUpdate] = useState(false)

    return (
        <div className='side-bar'>
            <img className='profile-pic' src={tony} alt='user logo' />
            <div className="bold-line"></div>
            <div className="user-profile">
                <div className="user-detail">
                    <AccountCircleIcon /><p>{`  ${name}`}</p>
                </div>
                <div className="user-detail">
                    <AssignmentIndIcon /><p>{` ${userId}`}</p>
                </div>
                <div className="user-detail">
                    <EmailIcon /><p>{` ${userEmail}`}</p>
                </div>
                <div className="user-detail">
                    <PhoneAndroidIcon /><p>{` ${userPhone}`}</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar
