import React from "react";
import './ProfileCard.css'

function ProfileCard({ user }) {

    return (
        <div className="profile-card">
            <h1>Welcome, {user.username}!</h1>
            <img id="mypage-profile-pic" src={user.profile_pic} alt={user.username + '\'s profile pic'}/>
            <h1>Followers: {user.followers}</h1>
        </div>
    )
}

export default ProfileCard;