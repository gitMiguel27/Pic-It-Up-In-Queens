import React from "react";
import PostCard from "./PostCard";
import './PostCardList.css'

function PostCardList({ posts }) {
    return (
        <div className="post-card-list">
            <h1 id="my-posts">Completed Challenges:</h1>
            <div className="post-cards-container">
                {
                    posts.map(post => {
                        return <PostCard key={post.id} post={post} />
                    })
                }
            </div>
        </div>
    )
}

export default PostCardList;