import React from "react";
import PostCard from "./PostCard";
import './PostCardList.css'

function PostCardList({ posts }) {

    return (
        <div className="post-card-list">
            <h1 id="my-posts">My Posts:</h1>
            {
                posts.map(post => {
                    return <PostCard key={post.id} post={post} />
                })
            }
        </div>
    )
}

export default PostCardList;