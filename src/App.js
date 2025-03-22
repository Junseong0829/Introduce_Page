import './App.css';
import React from "react";
import Intro from "./pages/Intro";
import Profile from "./pages/Profile";
import Gallery from "./pages/Gallery";
import Cat from "./pages/Cat";
import Me from "./pages/Me";
import {Route, Routes, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header class="header">
        <nav className="nav">
          <Link to={`/`}>
            <li>Intro</li>
          </Link>
          <Link to={`profile`}>
            <li>Profile</li>
          </Link>
          <Link to={`gallery`}>
            <li>Gallery</li>
          </Link>
        </nav>
      </header>
      <main class="main">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/Introduce_Page" element={<Intro />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/Cat" element={<Cat />} />
          <Route path="/gallery/me" element={<Me />} />
        </Routes>
      </main>
      <footer>
        <div class="footer">
          <p>SNS : 🐣@wnsxxd_</p>
          <p>TEL : ☎️010-4235-2512</p>
          <p>Made by 🏫GIST 21 이준성</p>
        </div>
      </footer>
    </div>
  );
}

export default App;