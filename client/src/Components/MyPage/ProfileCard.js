import React from "react";
import Typical from 'react-typical';
import './ProfileCard.css'

function ProfileCard({ user, points }) {

    return (
        <div className="profile-card">
            <h1>Welcome, {' '}
                <Typical
                    loop={1}
                    wrapper="b"
                    steps={[
                        user.username + '!',
                        1000,
                        '',
                        1000,
                        user.username + '!',
                        7500
                    ]}
                />
            </h1>
            <img id="mypage-profile-pic" src={user.profile_pic} alt={user.username + '\'s profile pic'}/>
            <h1>Points: {points}</h1>
        </div>
    )
}

export default ProfileCard;