import React, { useState, useEffect } from "react";
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
import {Songs} from  "./Songs";
import MusicPlayer from "./MusicPlayer";

function AudioList() {
    
    const[songs,setSongs]=useState(Songs);
    const[song,setSong]=useState(Songs[0].song);
    const[img,setImg]=useState(Songs[0].imgSrc);

    useEffect(()=>{
        const songs=document.querySelectorAll(".songs")

        function changeMenuActive(){
            songs.forEach((n)=>n.classList.remove("active"));
            this.classList.add("active");
        }

        songs.forEach(n=>n.addEventListener("click",changeMenuActive));
    },[])

    const changeFavourite=(id)=>{
        Songs.forEach(song=>{
            if(song.id==id){
                song.favourite=!song.favourite
            }
        })
        setSongs([...Songs])
    }

    const setMainSong=(songSrc,imgSrc)=>{
        setSong(songSrc)
        setImg(imgSrc)
    }

  return (
    <div className="audioList">
      <h2 className="title">
        The List <span>{Songs.length} songs</span>
      </h2>

      <div className="songContainer">
            {
                songs && songs.map((song,index)=>(
                    <div className="songs" key={song.id} onClick={()=>setMainSong(song?.song,song?.imgSrc)}>
                        <div className="count">{`#${index +1}`}</div>
                        <div className="song">
                          <div className="imgBox">
                            <img src={song?.imgSrc} alt=""></img>
                          </div>
                          
                          <div className="section">
                              <p className="songName">
                                  {song?.songName}
                                  <span className="spanArtist">{song?.artist}</span>
                              </p>
                              
                              <div className="hits">
                                  <p className="hit">
                                      <i>
                                          <FaHeadphones />
                                          95,490,102
                                      </i>
                                  </p>
                                      
                                  <p className="duration">
                                      <i>
                                          <FaRegClock />
                                      </i>
                                      03.24
                                  </p>
                                      
                                  <div className="favourite" onClick={()=>changeFavourite(song?.id)}>
                                        {
                                            song?.favourite?
                                            <i>
                                                <FaHeart />
                                            </i>
                                            :
                                            <i>
                                                <FaRegHeart />
                                            </i>
                                        }
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>    
                ))
            }
      </div>



      <MusicPlayer song={song} imgsrc={img} />
    </div>
    
  );
}

export default AudioList;
