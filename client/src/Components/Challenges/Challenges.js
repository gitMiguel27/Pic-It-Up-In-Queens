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
    }, []);

    const lastChallenge = challenges.filter(challenge => challenge.id === challenges.length);
    const challengesExceptLast = challenges.filter(challenge => challenge.id !== challenges.length);


    return (
        <div className="challenges-page">
            <h1 className="challenges-titles">Challenge Of The Day - 5 pts.</h1>
            <div className="challenge-of-the-day">
                {
                    lastChallenge.map(challenge => {
                        return <ChallengeCard key={challenge.id} challenge={challenge}/>
                    })
                }
            </div>
            <h1 className="challenges-titles">Past Challenges - 3 pts.</h1>
            <div className="challenge-cards">
                {
                    challengesExceptLast.map(challenge => {
                        return <ChallengeCard key={challenge.id} challenge={challenge}/>
                    })
                }
            </div>
        </div>
    )
}

export default Challenges;