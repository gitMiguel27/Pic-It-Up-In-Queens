import React from "react";
import { NavLink } from 'react-router-dom';
import Typical from 'react-typical';
import './Navbar.css'

function Navbar({ user }) {

    return (
        <nav className="navbar">
            <div className='logo-container'>
                <p className="typical-logo">
                    <strong>Pic-It-Up</strong>
                </p>
                <p className="typical-logo">
                    <Typical
                        loop={1}
                        wrapper="b"
                        steps={[
                            'In Queens',
                            1000,
                            'Coming Soon: Manhattan',
                            1000,
                            'Coming Soon: Brooklyn',
                            1000,
                            'In Queens',
                            1000
                        ]}
                    />
                </p>
            </div>
            <div className= "navbar-links">
                <NavLink activeClassName="active" to='/home'>Home</NavLink>
                <NavLink activeClassName="active" to='/challenges'>Challenges</NavLink>
                <NavLink activeClassName="active" to='/pic-it-up-101'>Pic-It-Up 101</NavLink>
                <NavLink activeClassName="active" to='/feed'>Feed</NavLink>
                <NavLink activeClassName="active" to='/leaderboard'>Leaderboard</NavLink>
                <NavLink activeClassName="active" to={user !== null ? '/mypage' : '/login'}>{user !== null ? "My Page" : "Login"}</NavLink>
                {/* use state for to and content */}
            </div>
        </nav>
    )
}

export default Navbar;