import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import LandingImg from "./assets/1.png";
import nashed from "./assets/nashed.mp3";

function Eng() {
  return (
    <>
      <div className="navBar">
        <h1 id="engTitleN">Ramadan Kareem</h1>

        <div className="links">
          <a href="" target="_blank">
            Home
          </a>
          <a href="https://www.equran.org/index.html" target="_blank">
            Quran
          </a>
          <a href="https://mawdoo3.com/%D9%81%D8%B6%D9%84_%D8%B5%D9%8A%D8%A7%D9%85_%D8%B4%D9%87%D8%B1_%D8%B1%D9%85%D8%B6%D8%A7%D9%86" target="_blank">
            Fasting
          </a>
          <a href="https://ar.islamway.net/book/27582/%D8%B5%D8%AD%D9%8A%D8%AD-%D8%A7%D9%84%D8%A8%D8%AE%D8%A7%D8%B1%D9%8A-%D8%B7-%D8%AF%D8%A7%D8%B1-%D8%A7%D8%A8%D9%86-%D9%83%D8%AB%D9%8A%D8%B1" target="_blank">
            Hadith
          </a>
          <NavLink to="/">
            عربي
          </NavLink>
        </div>
      </div>
      <div className="landingPage">
        <div className="img">
          <img src={LandingImg} alt="landing page image" />
        </div>
        <div dir="ltr" className="txt">
          <h1 id="engTitle">Ramadan Kareem</h1>
          <p>Wishing you all a blessed Ramadan filled with goodness and blessings.</p>
          <p>
            May Allah accept from us and from you righteous deeds.
          </p>

          <br />

          <audio src={nashed} controls></audio>
        </div>
      </div>
    </>
  );
}

export default Eng;
