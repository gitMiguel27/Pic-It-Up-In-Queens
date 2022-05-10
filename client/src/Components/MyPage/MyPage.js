import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import PostCardList from "./PostCardList";
import piexif from 'piexifjs';
import "./MyPage.css"

function MyPage({ user }) {
    const [ userPosts, setUserPosts ] = useState([]);
    const [ imagePreview, setImagePreview ] = useState("");
    const [ makePostData, setMakePostData ] = useState({
        challenge: "",
        image: ""
    })
    // const [ challenges, setChallenges ] = useState([]);

    // useEffect(() => {
    //     fetch("/challenges")
    //     .then(resp => resp.json())
    //     .then(challengesData => {
    //         // console.log(challengesData);
    //         setChallenges(challengesData);
    //     });
    // }, [])

    useEffect(() => {
        if (user) {
            fetch('/posts')
            .then(resp => resp.json())
            .then(postsData => {
                // console.log(postsData.filter(post => post.user.id === user.id));
                let filteredPosts = postsData.filter(post => post.user.id === user.id);
                setUserPosts(filteredPosts);
            })
        }
    }, [user])

    function handleChange(event) {
        if (event.target.name === "image") {
            // console.log(event.target.files[0]);
            const reader = new FileReader();
            reader.onload = () =>{
              if(reader.readyState === 2){
                setImagePreview(reader.result)
              }
            }
            reader.readAsDataURL(event.target.files[0]);

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
        // console.log(makePostData);
        // console.log(event.target[1].files[0]);
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

            // console.log(challenges)
            // console.log(challenges.find(c => c.id === parseInt(makePostData.challenge)).image)

            // console.log([latitude, longitude]);
            fetch('/posts', {
                method: "Post",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    date: 20220510,
                    latitude: latitude,
                    longitude: longitude,
                    user_id: user.id,
                    challenge_id: parseInt(makePostData.challenge)
                })
            })
            .then(resp => resp.json())
            .then(newPost => {
                setUserPosts([...userPosts, newPost]);
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
        }
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

    // function loadPiexif( file ) {
    //     const reader = new FileReader();
    //     if (file) {
    //       reader.readAsDataURL(file);
    //       reader.onload = () => {
    //         const Base64 = reader.result;
    //         //convert binary to base64
    //         console.log(Base64);
    //         //use piexif.load on base64 here!
    //         // console.log(piexif.load(Base64));
    //         const newImageExif = piexif.load(Base64);
    //         // console.log(newImageExif['GPS'][piexif.GPSIFD.GPSLatitude])
    //         // console.log(newImageExif['GPS'][piexif.GPSIFD.GPSLongitude])
  
    //         return newImageExif
    //       };
    //       reader.onerror = ( error ) => {
    //         console.log("error: ", error);
    //       };
    //     }
    // };