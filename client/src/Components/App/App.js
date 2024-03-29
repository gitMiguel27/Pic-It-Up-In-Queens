import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import MyPage from '../MyPage/MyPage';
import Challenges from '../Challenges/Challenges';
import PicItUp101 from '../PicItUp101/PicItUp101';
import Feed from '../Feed/Feed';
import Leaderboard from '../Leaderboard/Leaderboard';
import './App.css';

function App() {
  const [ user, setUser ] = useState(null);
  const [ points, setPoints ] = useState(0);

  useEffect(() => {
    // auto-login
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser(user);
          setPoints(user.points);
        })
      }
    });
  },[]);

  const [ challenges, setChallenges ] = useState([]);

  useEffect(() => {
      fetch("/challenges")
      .then(resp => resp.json())
      .then(challengesData => {
          setChallenges(challengesData);
      });
  },[]);

  return (
    <div className='app'>
      <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route exact path='/' element={<Home />}>
          </Route>
          <Route path='/home' element={<Home />}>
          </Route>
          <Route path='/challenges' element={<Challenges challenges={challenges} />}>
          </Route>
          <Route path='/pic-it-up-101' element={<PicItUp101 />}>
          </Route>
          <Route path='/feed' element={<Feed challenges={challenges} />}>
          </Route>
          <Route path='/leaderboard' element={<Leaderboard />}>
          </Route>
          <Route path='/login' element={<Login setUser={setUser} setPoints={setPoints} />}>
          </Route>
          <Route path='/signup' element={<Signup setUser={setUser} />}>
          </Route>
          <Route path='/mypage' element={<MyPage user={user} setPoints={setPoints} points={points} challenges={challenges} />}>
          </Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
