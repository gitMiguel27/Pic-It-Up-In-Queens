import React, { useEffect, useState } from "react";
import './Leaderboard.css';

function Leaderboard() {
    const [ rankedUsers, setRankedUsers ] = useState([]);

    useEffect(() => {
        fetch('/users')
        .then(resp => resp.json())
        .then(users => {
            // console.log(users);
            setRankedUsers(users);
        })
    },[]);

    return (
        <div className="leaderboard">
            <h1 id="leaderboard-title">Pic-It-Up Leaderboard<br/>Check Out Who's On Top</h1>
        </div>
    )
}

export default Leaderboard;