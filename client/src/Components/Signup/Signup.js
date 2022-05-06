import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import "./Signup.css"


function Signup({ setUser }) {
    // const history = useHistory();
    const [ signupData, setSignupData] = useState ({
        full_name: "",
        username: "",
        email: "",
        password: "",
        profile_pic: ""
    });
  
    function handleChange(event) {
      setSignupData({
        ...signupData,
        [event.target.name]: event.target.value,
      })
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            full_name: signupData.full_name,
            username: signupData.username,
            email: signupData.email,
            password: signupData.password,
            profile_pic: signupData.profile_pic
          }),
        }).then((resp) => {
            if (resp.ok) {
              resp.json().then((user) => setUser(user));
            }
        });
    
        setSignupData({
            full_name: "",
            username: "",
            email: "",
            password: "",
            profile_pic: ""
        });

        // if (errors === []) {
        //     history.push("/mypage")
        // }

        // setErrors([]);
    }


    return (
        <div className="signup">
            <div className='account-form-container'>
                <h3> Create An Account </h3>
                <form onSubmit={handleSubmit}> 
                    <label>
                    Full Name: 
                    <input
                        name='full_name'
                        type="text"
                        placeholder="full name..."
                        value={signupData.full_name}
                        onChange={handleChange}
                    />
                    </label>
                    <label>
                    Username: 
                    <input
                        name='username'
                        type="text"
                        placeholder="username..."
                        value={signupData.username}
                        onChange={handleChange}
                    />
                    </label>
                    <label>
                    Email: 
                    <input
                        name='email'
                        type="email"
                        placeholder="email..."
                        value={signupData.email}
                        onChange={handleChange}
                    />
                    </label>
                    <label>
                    Password: 
                    <input
                        name='password'
                        type="password"
                        placeholder="password..."
                        value={signupData.password}
                        onChange={handleChange}
                    />
                    </label>
                    <label>
                    Profile Pic: 
                    <input
                        name='profile_pic'
                        type="text"
                        placeholder="profile picture..."
                        value={signupData.profile_pic}
                        onChange={handleChange}
                    />
                    </label>
                    <input className='submit' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Signup;