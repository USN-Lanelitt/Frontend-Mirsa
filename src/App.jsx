import React from 'react';
import './App.css';
import Home from "./common/home";
import Nav from "./common/nav";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FriendList from "./feature/friend/friend-list";
import FriendReques from "./feature/friend/friend-reques";
import FriendAll from "./feature/friend/friend-all";
function App() {
    return (
        <Router>
        <div className="App">
            <Nav />
            <Route path="/home" exact component={Home} />
            <Route path="/friendList" exact component={FriendList} />
            <Route path="/friendReques" exact component={FriendReques} />
            



        </div>
        </Router>
    );
}

export default App;

