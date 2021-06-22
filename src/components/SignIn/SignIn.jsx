import React, {useState} from 'react';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';
import './SignIn.css';
import { useHistory } from "react-router-dom";

function SignIn() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const onChange = (e) => {
        const {name, value} = e.target;
        if(name === 'name'){
            setName(value);
        }else{
            setPassword(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('http://127.0.0.1:8010/user/list/')
        .then((res) => {
            const user = res.data.filter((user) => {
                return user.userId === name;
            })
            if(user.length){
                history.push(`user/${user[0].id}`);
            }
        })
        .catch((error) => console.log(error));
        setName("");
    }
    return (
        <div className='sign-in'>
            <form className='form-data' onSubmit={handleSubmit}>
                <div className="form-field">
                    <TextField
                        className='text-field' 
                        label='Enter Username'
                        variant="outlined"
                        name='name'
                        value={name}
                        autoComplete='off'
                        onChange={onChange}
                    />
                </div>
                <div className="form-field">
                    <TextField 
                        className='text-field'
                        type='password'
                        label='Enter Password'
                        variant="outlined"
                        name='password'
                        autoComplete='off'
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <Button className='signin-button' variant='contained' color='primary' onClick={handleSubmit}>Sign In</Button>
            </form>
        </div>
    )
}

export default SignIn;
