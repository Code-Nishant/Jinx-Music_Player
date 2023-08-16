import React from "react";
import { BsVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import track_image from "../images/track_image.png"

function TrackList() {
  return (
    <div className="trackList">
      <div className="top">
        <img src={track_image} alt="Track image"></img>
        <p className="trackName">
            Sample Name<span className="trackSpan">Artist</span>
        </p>
      </div>
      <div className="bottom">
        <i><BsVolumeUpFill /></i>
        <input type="range"></input>
        <i><BsMusicNoteList /></i>
        <i><FaDesktop /></i>
      </div>
      <p></p>
    </div>
  );
}

export default TrackList;
