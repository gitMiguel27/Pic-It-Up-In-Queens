import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import PostCardList from "./PostCardList";
import "./MyPage.css"

function MyPage({ user }) {
    const [ userPosts, setUserPosts ] = useState([]);
    const [ makePostData, setMakePostData ] = useState({
        challenge: "",
        image: ""
    })

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

    function handleChange(event) {
        setMakePostData({
            ...makePostData,
            [event.target.name]: event.target.value
        })
    }

    function handleMakePost(event) {
        event.preventDefault();
        console.log(makePostData);

        setMakePostData({
            challenge: "",
            image: ""
        })
    }

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
                            <form onSubmit={handleMakePost}>
                                <input type="text" name="challenge" placeholder="challenge number..." required value={makePostData.challenge} onChange={handleChange} />
                                <input type="text" name="image" placeholder="image..." required value={makePostData.image} onChange={handleChange} />
                                <button>Login</button>
                            </form>
                        </div>
                    </div>
                    </>
                : <h1 id="login-message">Please Login To Use This Feature...</h1>}
        </div>
    )
}

export default MyPage;