import React from "react";
import Artist from "../images/artist.jpeg";
import check from "../images/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";

function Banner() {
  return (
    <div className="banner">
      <img src={Artist} alt="Artist image" className="bannerImg"></img>

      <div className="content">
        <div className="breadCrump">
          <p>
            Home<span>/Popular Artists</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>

        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>KK</h2>
              <img src={check}></img>
            </div>
            <p>
              <i>
                <FaHeadphones />
              </i>
              11,184,5486<span>Monthly Listeners</span>
            </p>
          </div>
          <div className="right">
            <a href="#">Play</a>
            <a href="#">
              <i>
                <FaCheck />
              </i>
              Following
            </a>
          </div>
        </div>
      </div>
      <div className="bottomLayer"></div>
    </div>
  );
}

export default Banner;
