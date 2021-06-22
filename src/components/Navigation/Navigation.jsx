import React from 'react';
import './Navigation.css';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

function Navigation() {
    const history = useHistory();
    const onEdit = () => {
        const url = history.location.pathname
        history.push(`${url}/edit`);
    }
    return(
        <div className='navigation-header'>
            <Button variant='contained' color='primary' onClick={onEdit}>Edit Profile</Button>
            <Button variant='contained' color='primary'>Update Preference</Button>
            <Button variant='contained' color='secondary'>Delete</Button>
        </div>
    );
}

export default Navigation;