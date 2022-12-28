import React, { useEffect, useState } from "react";
import FeedPost from "./FeedPost/FeedPost";
import './Feed.css';

function Feed({ challenges }) {
    const [ feedPosts, setFeedPosts ] = useState([]);

    useEffect(() => {
        fetch('/posts')
        .then(resp => resp.json())
        .then(postData => {
            // console.log(postData);
            setFeedPosts(postData);
        });
    },[]);

    return (
        <div className="feed">
            <h1 id="feed-title">Pic-It-Up Feed</h1>
            <div className="feed-posts">
                {
                    feedPosts.length === 0 ?
                    <h1>Waiting For Players To Complete Challenges...</h1>
                    : 
                    feedPosts.map(post => {
                        return <FeedPost key={post.id} post={post} challenges={challenges}/>
                    })
                }
            </div>
        </div>
    )
};

export default Feed;