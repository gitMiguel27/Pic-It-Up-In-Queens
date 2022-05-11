import React from "react";
import "./FeedPost.css"

function FeedPost({ post, challenges }) {

    return (
        <div className="feed-post-element">
            <h2>{post.user.username} has completed Challenge #{post.challenge.id} and earned 
            {challenges[post.challenge.id] === challenges.length? "5" : "3"} points</h2>
        </div>
    )
}

export default FeedPost;