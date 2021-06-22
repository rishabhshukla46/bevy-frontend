import React, {useState, useEffect} from 'react';
import './SearchBar.css';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import Select  from 'react-select';

function SearchBar() {
    const [searchKey, setSearchKey] = useState("");
    const [searchList, setSearchList] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);


    useEffect(() => {
        axios.get('http://127.0.0.1:8010/user/list/')
        .then((res) => {
            console.log(res.data);
            const list = res.data.map((user) => {
                return {
                    value: user.name,
                    label: user.name
                }
            })
            console.log(list);
            setSearchList(list);
        })
        .then(() => console.log(searchList))
        .catch((error) => console.log(error))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('http://127.0.0.1:8010/user/list/')
        .then((res) => {
            console.log(res.data);
        })
        .catch((error) => console.log(error))
    }

    const handleChange = (selectedOption) => {
        console.log(selectedOption);
        setSelectedOption(selectedOption);
        
    }
    return (
        <div className='search-bar'>
            <div className="search-field">
                <Select 
                    value={selectedOption} 
                    options={searchList} 
                    onChange={handleChange} 
                    placeholder='search' 
                    openMenuOnClick={true}
                />
            </div>
            <Button variant='contained' color='primary' onClick={handleSubmit}>Search User to Send Notifications</Button>
        </div>
    )
}

export default SearchBar
