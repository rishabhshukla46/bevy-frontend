import React, {useState, useEffect} from 'react';
import { Button, TextField, MenuItem } from '@material-ui/core';
import axios from 'axios';
import './SignUp.css';

function SignUp() {
    const [name, setName] = useState("")
    const [userId, setUserId] = useState("")
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [notify, setNotify] = useState("Email");
    const [error, setError] = useState(false);

    const onChange = (e) => {
        const value = e.target.value;

        switch(e.target.name){
            case 'name':
                setName(value)
                break;
            
            case 'userId':
                setUserId(value);
                break;

            case 'userEmail':
                setUserEmail(value);
                break;

            case 'userPhone':
                setUserPhone(value);
                break;
            
            case 'notify':
                setNotify(value);
                break;

            default:
                setError(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        axios.post('http://127.0.0.1:8010/user/list/', {
            name: name,
            userId: userId,
            userEmail: userEmail,
            userPhone: userPhone,
            notify: notify
        })
        .then((res) => console.log(res))
        .catch((error) => {
            console.log(error);
            setError(true);
        })
    }

    return (
        <div classname='sign-up'>
            <form className='form-data'>
                <div className="form-field-signup">
                    <div className="form-field">
                        <TextField
                            className='text-field' 
                            label='Enter Name'
                            variant="outlined"
                            name='name'
                            value={name}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-field">
                        <TextField
                            className='text-field' 
                            label='Enter userId'
                            variant="outlined"
                            name='userId'
                            value={userId}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className="form-field-signup">
                    <div className="form-field">
                        <TextField
                            className='text-field' 
                            label='Enter Email'
                            variant="outlined"
                            name='userEmail'
                            value={userEmail}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-field">
                        <TextField
                            className='text-field' 
                            label='Enter Phone'
                            variant="outlined"
                            name='userPhone'
                            value={userPhone}
                            onChange={onChange}
                        />
                    </div>
                </div>
                
                <div className="form-field-select">
                    <TextField
                        className='text-field' 
                        label='Notification'
                        variant="outlined"
                        name='notify'
                        value={notify}
                        onChange={onChange}
                        select
                    >
                        <MenuItem value="email">Email</MenuItem>
                        <MenuItem value="phone">Phone</MenuItem>    
                    </TextField>
                </div>
                <div className="signup-button">
                    <Button  
                        variant='contained' 
                        color='primary' 
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </Button>
                </div>
                
            </form>
        </div>
    )
}

export default SignUp;
