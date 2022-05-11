import React, { useEffect, useState } from "react";
import FeedPost from "./FeedPost/FeedPost";
import './Feed.css';

function Feed() {
    const [ feedPosts, setFeedPosts ] = useState([]);
    const [ challenges, setChallenges ] = useState([]);

    useEffect(() => {
        fetch("/challenges")
        .then(resp => resp.json())
        .then(challengesData => {
            // console.log(challengesData);
            setChallenges(challengesData);
        });
    }, []);

    useEffect(() => {
        fetch('/posts')
        .then(resp => resp.json())
        .then(pdata => {
            console.log(pdata);
            setFeedPosts(pdata);
        })
    },[]);

    const posts = feedPosts.map(post => {
        return <FeedPost key={post.id} post={post} challenges={challenges}/>
    });

    return (
        <div className="feed">
            <h1 id="feed-title">Welcome To The Feed</h1>
            {feedPosts.length > 0 ? {posts} : <h1>Waiting For Players To Complete Challenges...</h1>}
        </div>
    )
};

export default Feed;