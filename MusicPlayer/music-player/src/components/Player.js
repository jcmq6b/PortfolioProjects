//This component is the controls for the music player

import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faPlay,faAngleLeft, faAngleRight, faPause
} from '@fortawesome/free-solid-svg-icons'

const Player = ({currentSong,isPlaying,setIsPlaying}) => {
    //Ref (to access html elements)
    const audioRef = useRef(null);

    //Event Handlers
    const playSongHandler = () =>{
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    //Function to update the start time and end time of the song playing
    const timeUpdateHandler = (event) =>{
        const current = event.target.currentTime;
        const duration = event.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration: duration})
    };

    //Formats the start/end time of the song to minutes:seconds
    const getTime = (time) =>{
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    };
    
    //Changes time when slider is dragged
    const dragHandler = (event) =>{
        audioRef.current.currentTime = event.target.value; //Updates where the song is playing
        setSongInfo({...songInfo, currentTime: event.target.value}); //Update start time numbers
    };

    //State
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });

    return(
        <div className="player">
            <div className="time-control">
                 {/* Slider that controls time  */}
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                    min={0} 
                    max={songInfo.duration} 
                    value={songInfo.currentTime} 
                    onChange={dragHandler}
                    type="range" 
                />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    className="skip-back" 
                    size="2x" 
                    icon={faAngleLeft}
                />
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className="play" 
                    size="2x" 
                    icon= {isPlaying? faPause: faPlay}
                />
                <FontAwesomeIcon
                    className="skip-forward" 
                    size="2x" 
                    icon={faAngleRight}
                />
            </div>
            <audio 
                onTimeUpdate={timeUpdateHandler} 
                // happens when audio file loads up
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef} 
                src={currentSong.audio}
            ></audio>
        </div>
    )
}

export default Player;