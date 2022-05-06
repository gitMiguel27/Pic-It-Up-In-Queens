import React, { useEffect, useState } from "react";
import ChallengeCard from "./ChallengeCard";
import "./Challenges.css"

function Challenges() {
    const [ challenges, setChallenges ] = useState([]);

    useEffect(() => {
        fetch("/challenges")
        .then(resp => resp.json())
        .then(challengesData => {
            // console.log(challengesData);
            setChallenges(challengesData);
        });
    }, [])



    return (
        <div className="challenges-page">
            <h1 className="challenges-titles">Challenge Of The Day</h1>
            <h1 className="challenges-titles">Past Challenges</h1>
            <div className="challenge-cards">
                {
                    challenges.map(challenge => {
                        return <ChallengeCard key={challenge.id} challenge={challenge}/>
                    })
                }
            </div>
        </div>
    )
}

export default Challenges;