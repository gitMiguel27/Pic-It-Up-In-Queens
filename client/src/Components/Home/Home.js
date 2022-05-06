import React from "react";
import './Home.css';


function Home() {
    return (
        <div className="home">
            <div className="home-header">
                <h1>Welcome to Pic-It-Up <br/> In Queens</h1>
            </div>
            <div>
                <h1>Announcements</h1>
                <ol id="announcement-list">
                    <li className="announcement">
                        <p>New Challenge Of The Day posted!!! Hurry if you want to rack up as many points as you can.</p>
                    </li>
                </ol>
            </div>
            <div id="about-us">
                <h1>About Us</h1>
                <p>Miguel Nazario, creator of Pic-It-Up, sought to combine his passion of exploring the city and photography while incetivizing people to see Queens the way he does. This idea was strongly influenced by his train rides to and from school and enjoying the views of different neighborhoods in Queens. He hopes you grow to appreciate Queens the way he does as you play the game and challenge yourself to continue to explore places, the culture, the music, and the food. Miguel plans to expand Pic-It-Up to the other New York City boroughs, as well as other major cities in the U.S. <br/> Please see the Pic-It-Up 101 page for advice, rules, and warnings when playing the game.</p>
            </div>
        </div>
    )
}

export default Home;