import React from 'react';
import './App.css';
import Home from "./common/home";
import Nav from "./common/nav";
import {BrowserRouter as Router} from "react-router-dom";
import Scaffold from "./scaffold";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Scaffold/>
            </div>
        </Router>
    );
}

export default App;

