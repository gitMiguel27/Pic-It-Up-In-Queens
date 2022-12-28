import React from "react";
import Typical from 'react-typical';
import "./FeedPost.css"

function FeedPost({ post, challenges }) {

    return (
        <div className="feed-post-element">
            <h2>
                {
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            post.user.username,
                            1500,
                            '',
                            500,
                            post.user.username,
                            10000
                        ]}
                    />
                }
                {' '} has completed Challenge #{post.challenge.id} at {post.challenge.location} and earned {post.challenge === challenges[challenges.length + 1] ? 5 + post.challenge.difficulty + '' : 3 + post.challenge.difficulty + ''} points
            </h2>
            <hr/>
        </div>
    )
}

export default FeedPost;