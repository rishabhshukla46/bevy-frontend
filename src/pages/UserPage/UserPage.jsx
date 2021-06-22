import React, {useState, useEffect} from 'react';
import './UserPage.css';
import SideBar from '../../components/SiderBar/SideBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Navigation from '../../components/Navigation/Navigation';
import { useHistory } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from 'axios';

function UserPage() {
    const history = useHistory();
    const [userObj, setUserObj] = useState();

    useEffect(() => {
        const currentUrl = history.location.pathname;
        const productId = currentUrl.split("/");
        const itemId = productId[productId.length - 1];
        axios.get(`http://127.0.0.1:8010/user/detail/${itemId}/`)
        .then((res) => {
            setUserObj(res.data);
        })
        .catch((error) => console.log(error))
    }, [])

    const content = userObj ? <SideBar user={userObj} /> : "";
    return (
        <div className='user-page'>
            {content}
            <div className="rigth-bar">
                <Navigation />
                <div className="bold-line"></div>
                <Switch>
                    <Route exact path='/edit'>
                        
                    </Route>
                    <Route exact path='/update'>
                        <UserPage />
                    </Route>
                    <Route exact path='/'>
                        <SearchBar />
                    </Route>
                </Switch>
                <SearchBar />
            </div>
        </div>
    )
}

export default UserPage;
