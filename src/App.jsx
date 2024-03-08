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
          <a href="https://www.equran.org/index.html" target="_blank">
            القرآن
          </a>
          <a href="https://mawdoo3.com/%D9%81%D8%B6%D9%84_%D8%B5%D9%8A%D8%A7%D9%85_%D8%B4%D9%87%D8%B1_%D8%B1%D9%85%D8%B6%D8%A7%D9%86" target="_blank">
            الصيام
          </a>
          <a href="https://ar.islamway.net/book/27582/%D8%B5%D8%AD%D9%8A%D8%AD-%D8%A7%D9%84%D8%A8%D8%AE%D8%A7%D8%B1%D9%8A-%D8%B7-%D8%AF%D8%A7%D8%B1-%D8%A7%D8%A8%D9%86-%D9%83%D8%AB%D9%8A%D8%B1" target="_blank">
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
