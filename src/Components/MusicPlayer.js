import React, { useState, useRef, useEffect } from 'react'
import "../Styles/MusicPlayer.css"
import { FaBackward, FaForward, FaHeart, FaPause, FaPlay, FaRegHeart, FaShareAlt, FaStepBackward, FaStepForward } from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'

function MusicPlayer({song, imgsrc}) {
    
    // states
    const [isLove,setLoved]=useState(false)
    const[isPlaying,setPlaying]=useState(false)
    const [duration,setDuration]=useState(0)
    const [currentTime,setCurrrentTime]=useState(0)

    // reference
    const audioPlayer=useRef()
    const progressBar= useRef()
    const animationRef= useRef()

    // useeffects
    useEffect(()=>{
        
        const sec=Math.floor(audioPlayer.current.duration);
        setDuration(sec)
    },[
        audioPlayer?.current?.loadmetadata,
        audioPlayer?.current?.readyState,
    ])

    // executing functions
    
    const changePlayPause = ()=>{
        const prevValue=isPlaying
        if(!prevValue){
            audioPlayer.current.play()
            animationRef.current=requestAnimationFrame(whilePlaying)
        }
        else{
            audioPlayer.current.pause()
            cancelAnimationFrame(animationRef.current)
        }
        setPlaying(!prevValue)
    }

    const calulateTime=(sec)=>{
        const min=Math.floor(sec/60);
        const returnMin=min<10?`0${min}`:`${min}`;

        const seconds=Math.floor(sec%60);
        const returnSeconds=seconds<10?`0${seconds}`:`${seconds}`;

        return `${returnMin}:${returnSeconds}`;
    }

    const whilePlaying=()=>{
        progressBar.current.value=audioPlayer.current.currentTime;
        changeCurrentTime();
        animationRef.current=requestAnimationFrame(whilePlaying)
    }

    const changeProgress=()=>{
        audioPlayer.current.currentTime=progressBar.current.value;
        changeCurrentTime()
    }

    const changeCurrentTime=()=>{
        progressBar.current.style.setProperty('--player-played',`${(progressBar.current.value/duration)*100}%`)

        setCurrrentTime(progressBar.current.value)
    }
    


    const changeLoved= ()=>{
        setLoved(!isLove)
    }







  return (
    <div className='musicPlayer'>
        <div className='songImage'>
            <img src={imgsrc}></img>
        </div>
        <div className='songAttributes'>
            <audio src={song} preload='metadata' ref={audioPlayer}></audio>
            <div className='top'>
                <div className='left'>
                    <div className='loved' onClick={changeLoved}>
                        {isLove?(
                            <i>
                                <FaRegHeart />
                            </i>
                            )
                            :
                            (
                                <i>
                                    <FaHeart />
                                </i>
                            )
                        }
                    </div>
                    <div className='download'>
                        <i><BsDownload /></i>
                    </div>
                </div>
                <div className='middle'>
                    <div className='back'>
                        <i><FaStepBackward /></i>
                        <i><FaBackward /></i>
                    </div>
                    <div className='playPause' onClick={changePlayPause}>
                        {isPlaying?
                            <i><FaPause /></i>
                            :
                            <i><FaPlay /></i>
                        }
                    </div>
                    <div className='forward'>
                        <i><FaForward /></i>
                        <i><FaStepForward /></i>
                    </div>
                </div>
                <div className='right'>
                    <i><FaShareAlt /></i>
                </div>
            </div>
            <div className='bottom'>
                <div className='currentTime'>{calulateTime(currentTime)}</div>
                <input type='range'  className='progressBar' ref={progressBar} onChange={changeProgress}/>
                <div className='duration'>{duration && !isNaN(duration)&&calulateTime(duration)?calulateTime(duration):"00:00"}</div>
            </div>
        </div>
    </div>
  )
}

export default MusicPlayer