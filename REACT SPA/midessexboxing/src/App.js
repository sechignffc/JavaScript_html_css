import logo from "./logo.svg";
import "./style.css";
//import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import NewsGrid from "./components/NewsGrid";
import NewsArticle from "./components/NewsArticle";
import Timetable from "./components/Timetable";
import Honours from "./components/Honours";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>

        <Router>
          <div className="menu">Menu</div>
          <nav className="nav">
            <ul className="hidemenu_hide">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="news">News</Link>
              </li>
              <li>
                <Link to="/timetable">Timetable</Link>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
              </li>
              <li>
                <a href="boxers.html">Boxers</a>
              </li>
              <li>
                <a href="events.html">Events</a>
              </li>
              <li>
                <Link to="/honours">Honours</Link>
              </li>
              <li>
                <a href="info.html">Info</a>
              </li>
            </ul>
            <br></br>
          </nav>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Homepage></Homepage>}></Route>
              <Route
                path="/timetable"
                element={<Timetable></Timetable>}
              ></Route>
              <Route path="/honours" element={<Honours></Honours>}></Route>
              <Route path="/news" element={<NewsGrid></NewsGrid>}></Route>
              <Route path="/news/:newsId" element={<NewsArticle />} />
            </Routes>
          </div>
        </Router>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
