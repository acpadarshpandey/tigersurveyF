import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import logo from "./images/logo.png";
import LandingPage from "./component/landingpage/landingpage";
import CreatePage from "./component/createpage/createpage";


function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo"/>
        <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/create" exact component={CreatePage} />
        </Switch>
      
    </div>
  );
}

export default App;
