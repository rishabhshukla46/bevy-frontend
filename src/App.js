import LandingPage from './pages/LandingPage/LandingPage';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
