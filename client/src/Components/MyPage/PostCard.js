import React from "react";
import './PostCard.css';

function PostCard({ post }) {
    return (
        <div className="post-card">
            <div className="post-card-header">
                <h1>Challenge: {post.challenge.id}</h1>
                <h1>{post.date}</h1>
            </div>
            <img src={post.image} alt={post.user.username}/>
        </div>
    )
}

export default PostCard;