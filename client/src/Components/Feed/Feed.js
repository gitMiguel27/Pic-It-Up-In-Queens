import React, { useEffect } from "react";
import './Feed.css';

function Feed() {

    useEffect(() => {
        fetch('/posts')
        .then(resp => resp.json())
        .then(postsData => {
            console.log(postsData);
        })
    },[])

    return (
        <div className="feed">
            <h1 id="feed-title">Welcome To The Feed</h1>
            <h2>Maybe make this like "User just gained x amount of points..."</h2>
        </div>
    )
}

export default Feed;