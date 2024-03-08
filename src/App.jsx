import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import LandingImg from "./assets/1.png";
import nashed from "./assets/nashed.mp3";

function App() {
  return (
    <>
      <div className="navBar">
        <h1>رمضان كريم</h1>

        <div className="links">
          <a href="" target="_blank">
            الرئيسية
          </a>
          <a href="" target="_blank">
            القرآن
          </a>
          <a href="" target="_blank">
            الصيام
          </a>
          <a href="" target="_blank">
            الحديث
          </a>
          <NavLink to="/Eng">
            English
          </NavLink>
        </div>
      </div>
      <div className="landingPage">
        <div className="img">
          <img src={LandingImg} alt="landing page image" />
        </div>
        <div dir="rtl" className="txt">
          <h1>رمضان كريم</h1>
          <p>كل عام و انتم بخير بمناسبة حلول شهر رمضان الكريم</p>
          <p>
            أتمنى لكم جميعًا شهر رمضان مليء بالخيرات والبركات، وأن يتقبل الله
            منا ومنكم صالح الأعمال.
          </p>

          <br />

          <audio src={nashed} controls></audio>
        </div>
      </div>
      
    </>
  );
}

export default App;
