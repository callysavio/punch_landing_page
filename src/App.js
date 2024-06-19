// src/App.js
import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FindWork from './pages/FindWork';
import FindTalent from './pages/FindTalent';
import Articles from './pages/Articles';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import SignUp from './pages/JoinNow';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/find-work" element={<FindWork />} />
          <Route path="/find-talent" element={<FindTalent />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
