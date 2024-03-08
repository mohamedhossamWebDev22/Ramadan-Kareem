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
          <a href="" target="_blank">
            Quran
          </a>
          <a href="" target="_blank">
            Fasting
          </a>
          <a href="" target="_blank">
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
