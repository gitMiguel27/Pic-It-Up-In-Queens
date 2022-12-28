import React from "react";
import './ChallengeCard.css'

function ChallengeCard({ challenge, color }) {

    return (
        <div className={color? "last-card-container" : "card-container"}>
            <div className="card-header">
                <h2 className="challenge-location">#{challenge.id} - {challenge.location}</h2>
                <h2>Difficulty: {challenge.difficulty}</h2>
            </div>
            <img src={challenge.image} alt={challenge.location}/>
            <h2 className="hint">Hint: {challenge.hint}</h2>
        </div>
    )
}

export default ChallengeCard;