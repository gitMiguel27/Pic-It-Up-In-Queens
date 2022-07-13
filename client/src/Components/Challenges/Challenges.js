import React, { useEffect, useState } from "react";
import ChallengeCard from "./ChallengeCard";
import Typical from 'react-typical';
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

    const lastChallenge = challenges.filter(challenge => challenge.id === challenges[challenges.length - 1].id);
    const challengesExceptLast = challenges.filter(challenge => challenge.id !== challenges[challenges.length - 1].id);

    return (
        <div className="challenges-page">
            <h1 className="challenges-titles"> Challenge of the Day -
                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        ' 5 pts.',
                        800,
                        '',
                        800,
                        ' 5 pts.',
                        10000
                    ]}
                />
            </h1>
            <div className="challenge-of-the-day">
                {
                    lastChallenge.map(challenge => {
                        return <ChallengeCard key={challenge.id} challenge={challenge} color={true}/>
                    })
                }
            </div>
            <h1 className="challenges-titles">Past Challenges -
                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        ' 3 pts.',
                        800,
                        '',
                        800,
                        ' 3 pts.',
                        10000
                    ]}
                />
            </h1>
            <div className="challenge-cards">
                {
                    challengesExceptLast.map(challenge => {
                        return <ChallengeCard key={challenge.id} challenge={challenge} color={false}/>
                    })
                }
            </div>
        </div>
    )
}

export default Challenges;