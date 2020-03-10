import React from 'react';
import {Route} from "react-router-dom";
import Home from "./common/home";
import FriendList from "./feature/friend/friend-list";
import FriendReques from "./feature/friend/friend-reques";
import FriendAll from "./feature/friend/friend-all";

const Scaffold = () => {
    return (
        <main>
            <Route path="/home" exact component={Home} />
            <Route path="/friendList" exact component={FriendList} />
            <Route path="/friendReques" exact component={FriendReques} />
            <Route path="/friendAll" exact component={FriendAll} />
        </main>
    );
};

export default Scaffold;