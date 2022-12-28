import React, { useEffect, useState } from "react";
import Typical from 'react-typical';
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
            <h1 id="leaderboard-title">Pic-It-Up Leaderboard</h1>
            <div className="table-container">
                <table className="leaderboard-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>User</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rankedUsers.map(user => {
                                return (
                                    <tr>
                                        <td>{rankedUsers.indexOf(user)+1}</td>
                                        <td>
                                            <Typical
                                                loop={Infinity}
                                                wrapper="b"
                                                steps={[
                                                    user.username,
                                                    1500,
                                                    '',
                                                    100,
                                                    user.username,
                                                    8500
                                                ]}
                                            />
                                        </td>
                                        <td>{user.points}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leaderboard;