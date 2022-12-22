import React from "react";
import Avatar from 'react-avatar';
import { useSelector } from "react-redux";
import './ProfileCard.css';

const UserProfileCard = () => {
    const { user: currentData } = useSelector(state => state.auth);
    return (
        <div id="profileCard" className='card'>
            <div className='profile-header'>
                <Avatar name={`${currentData.user.firstName} ${currentData.user.lastName}`} round={true} size="60px" className='user-ava' />
                <h5 className="user-name">{`${currentData.user.firstName}${' '}${currentData.user.lastName}`}</h5>
            </div>
            <div className='profile-middle'>
                <p>Location: <span >New South Wates</span></p>
                <p>Occupation: <span>Graduate Trainee</span></p>
            </div>
            <div className='profile-footer'>
                <h6>Who's viewed your profile<span style={{ color: "var(--color-link)" }}> 6</span></h6>
                <h6>Friends<span style={{ color: "var(--color-link)" }}> 2</span></h6>
            </div>
        </div>
    )
}

export default UserProfileCard;