import React from "react";
import './ChallengeCard.css'

function ChallengeCard({ challenge }) {
    return (
        <div className="card-container">
            <div className="card-header">
                <h1 className="challenge-location">#{challenge.id} - {challenge.location}</h1>
                <h1>Difficulty: {challenge.difficulty}</h1>
            </div>
            <img src={challenge.image} alt={challenge.location}/>
            <h1>Hint: {challenge.hint}</h1>
        </div>
    )
}

export default ChallengeCard;