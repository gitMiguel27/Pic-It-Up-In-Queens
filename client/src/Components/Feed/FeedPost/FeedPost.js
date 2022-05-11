import React from "react";
import "./FeedPost.css"

function FeedPost({ post, challenges }) {

    return (
        <div className="feed-post-element">
            <h2>{post.user.username} has completed Challenge #{post.challenge.id} at {post.challenge.location} and earned {''}
            {challenges[post.challenge.id] === challenges.length? 5 + challenges[post.challenge.id - 1].difficulty + '' : 3 + challenges[post.challenge.id - 1].difficulty + ''} points</h2>
            <hr/>
        </div>
    )
}

export default FeedPost;