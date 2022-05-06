import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import PostCardList from "./PostCardList";
import "./MyPage.css"

function MyPage({ user }) {
    const [ userPosts, setUserPosts ] = useState([]);

    useEffect(() => {
        if (user) {
            fetch('/posts')
            .then(resp => resp.json())
            .then(postsData => {
                console.log(postsData.filter(post => post.user.id === user.id));
                let filteredPosts = postsData.filter(post => post.user.id === user.id);
                setUserPosts(filteredPosts);
            })
        }
    }, [user])

    return (
        <div className="mypage">
                {user ? 
                    <>
                    <div className="logged-in">
                        <div className="profile-side">
                        <ProfileCard user={user} />
                        </div>
                        <div className="user-posts">
                            {userPosts.length > 0 ? <PostCardList posts={userPosts} /> : <h1>You Don't Have Any Posts Yet...<br/>Make A Post Below!</h1>}
                        </div>
                        <div className="make-a-post">
                            <h1>Make A Post!</h1>
                        </div>
                    </div>
                    </>
                : <h1 id="login-message">Please Login To Use This Feature...</h1>}
        </div>
    )
}

export default MyPage;