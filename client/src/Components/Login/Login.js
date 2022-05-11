import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css"

function Login({ setUser, setPoints }) {
    const navigate = useNavigate();
    const [ errors, setErrors ] = useState([]);
    const [ loginData, setLoginData ] = useState({
        username: "",
        password: ""
    })

    function handleChange(event) {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        })
    }

    function handleLogin(event) {
        event.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: loginData.username,
                password: loginData.password
            }),
        }).then(resp => {
            if (resp.ok) {
                resp.json().then(user => {
                    setUser(user)
                    setPoints(user.points)
                });
                navigate('/mypage');
            } else {
                resp.json().then((err) => setErrors(err.errors));
            }
        });

        setLoginData({
            username: "",
            password: ""
          })
    }

    return (
        <div className="login">
            <div className="login-form-container">
                <h1>Welcome,<br/>Please Login Below.</h1>
                <form onSubmit={handleLogin}>
                    <input type="username" name="username" placeholder="username..." required value={loginData.username} onChange={handleChange}/>
                    <input type="password" name="password" placeholder="password..." required value={loginData.password} onChange={handleChange}/>
                    <button>Login</button>
                    <div className="errors-container">
                        {
                            errors.map(err => {
                                return (
                                    <error key={err}>{err}</error>
                                )
                            })
                        }
                    </div>
                </form>
                <h3 id="signup-text">Don't have an account?<br/><a href="http://localhost:4000/signup">Signup</a></h3> 
            </div>
        </div>
    )
}

export default Login;