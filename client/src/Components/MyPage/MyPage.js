import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import PostCardList from "./PostCardList";
import piexif from 'piexifjs';
import "./MyPage.css"

function MyPage({ user, setPoints, points }) {
    const [ userPosts, setUserPosts ] = useState([]);
    const [ imagePreview, setImagePreview ] = useState("");
    const [ makePostData, setMakePostData ] = useState({
        challenge: "",
        image: ""
    });
    const [ challenges, setChallenges ] = useState([]);

    useEffect(() => {
        fetch("/challenges")
        .then(resp => resp.json())
        .then(challengesData => {
            setChallenges(challengesData);
        });
    }, []);

    useEffect(() => {
        if (user) {
            fetch('/posts')
            .then(resp => resp.json())
            .then(postsData => {
                let filteredPosts = postsData.filter(post => post.user.id === user.id);
                setUserPosts(filteredPosts);
            })
        }
    }, [user])

    function handleChange(event) {
        if (event.target.name === "image") {
            if (event.target.files[0]) {
                const reader = new FileReader();
                reader.onload = () =>{
                  if(reader.readyState === 2){
                    setImagePreview(reader.result)
                  }
                }
                reader.readAsDataURL(event.target.files[0]);
            };
            setMakePostData({
                ...makePostData,
                [event.target.name]: event.target.value
            });

        } else {
            setMakePostData({
                ...makePostData,
                [event.target.name]: event.target.value
            });
        };
    };

    function handleMakePost(event) {
        event.preventDefault();
        const imageFile = event.target[1].files[0];

        getLatitudeAndLongitude(imageFile);
    };

    function getLatitudeAndLongitude(file) {
        const reader = new FileReader();
        if (file) {
          reader.readAsDataURL(file);
          reader.onload = () => {
            const Base64 = reader.result;
            const newImageExif = piexif.load(Base64);
            const latitude = newImageExif['GPS'][piexif.GPSIFD.GPSLatitude][2][0]
            const longitude = newImageExif['GPS'][piexif.GPSIFD.GPSLongitude][2][0]

            fetch('/posts', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    date: 20220512,
                    latitude: latitude,
                    longitude: longitude,
                    user_id: user.id,
                    challenge_id: parseInt(makePostData.challenge)
                })
            })
            .then(resp => {
                if (resp.status === 500) {
                    resp.json().then(alert("You weren't close enough to fulfill challenge requirements. Try Again!"))
                } else {
                    resp.json().then(newPost => {
                        setUserPosts([...userPosts, newPost]);
                        if (challenges[parseInt(makePostData.challenge)-1] === challenges.length){
                            fetch(`/users/${user.username}`, {
                                method: "PATCH",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    points: user.points + 5 + challenges[parseInt(makePostData.challenge) - 1].difficulty
                                })
                            })
                            .then(resp => resp.json())
                            .then(userData => {
                                setPoints(userData.points);
                            });
                        } else {
                            fetch(`/users/${user.username}`, {
                                method: "PATCH",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    points: user.points + 3 + challenges[parseInt(makePostData.challenge) - 1].difficulty
                                })
                            })
                            .then(resp => resp.json())
                            .then(userData => {
                                setPoints(userData.points);
                            });
                        };
                    })
                }
            });

            setMakePostData({
                challenge: "",
                image: ""
            });
            setImagePreview("");

          };

          reader.onerror = ( error ) => {
            console.log("error: ", error);
          };
        };
    };

    return (
        <div className="mypage">
                {user ? 
                    <>
                    <div className="logged-in">
                        <div className="profile-side">
                        <ProfileCard user={user} points={points}/>
                        </div>
                        <div className="user-posts">
                            {userPosts.length > 0 ? <PostCardList posts={userPosts} /> : <h1>You Don't Have Any Posts Yet...</h1>}
                        </div>
                        <div className="make-a-post">
                            <h1>Complete a Challenge!</h1>
                            <div className="post-area">
                                <form className="post-form" onSubmit={handleMakePost}>
                                    <input type="text" name="challenge" placeholder="challenge number..." required value={makePostData.challenge} onChange={handleChange} />
                                    <input type="file" accept="image/*" name="image" required value={makePostData.image} onChange={handleChange}/>
                                    <button type="submit">Post</button>
                                </form>
                                <div className="post-preview">
                                    <h1>{imagePreview.length > 0 ? "Preview Image:" : ""}</h1>
                                    <img src={imagePreview} alt="" className="post-preview-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                : <h1 id="login-message">Please Login To Use This Feature...</h1>}
        </div>
    )
}

export default MyPage;