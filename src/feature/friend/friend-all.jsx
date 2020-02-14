import React from 'react';
import FriendCard from "./friend-card";
import data from "./data";

const FriendAll = () => {
        return (
            data.map(item => (
                <FriendCard
                    firstname={item.firstname}
                    lastname={item.lastname}
                    imageUrl={item.imageUrl}
                />

            ))
        );
    };
export default FriendAll;