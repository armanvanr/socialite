import React from "react";
import Avatar from 'react-avatar';
import './FriendList.css';

const FriendList = () => {
    const userFriends = [
        {
            firstName: "Andrew",
            lastName: "Zen",
            occup: "Front-end Developer"
        },
        {
            firstName: "Stephen",
            lastName: "Regular",
            occup: "Full-stack developer"
        }
    ];
    return (
        <div id="friend-list" className='card container'>
            <h4 className="mt-3 ">Friend List</h4>
            {userFriends.map((friend, index) => (
                <div className="friend-card" key={index}>
                    <Avatar name={`${friend.firstName}${' '}${friend.lastName}`} round={true} size="40px" className='friend-ava'></Avatar>
                    <div className="friend-info" >
                        <h6 id="name">{`${friend.firstName}${' '}${friend.lastName}`}</h6>
                        <p id="occup">{friend.occup}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FriendList;