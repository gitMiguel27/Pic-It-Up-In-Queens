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
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className='app'>
      <Navbar user={user}/>
        <Routes>
          <Route exact path='/' element={<Home />}>
          </Route>
          <Route path='/home' element={<Home />}>
          </Route>
          <Route path='/challenges' element={<Challenges />}>
          </Route>
          <Route path='/pic-it-up-101' element={<PicItUp101 />}>
          </Route>
          <Route path='/feed' element={<Feed />}>
          </Route>
          <Route path='/leaderboard' element={<Leaderboard />}>
          </Route>
          <Route path='/login' element={<Login setUser={setUser}/>}>
          </Route>
          <Route path='/signup' element={<Signup setUser={setUser}/>}>
          </Route>
          <Route path='/mypage' element={<MyPage user={user}/>}>
          </Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
