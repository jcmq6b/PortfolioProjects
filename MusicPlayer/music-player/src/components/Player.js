//This component is the controls for the music player

import React, {useRef, useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faPlay,faAngleLeft, faAngleRight, faPause
} from '@fortawesome/free-solid-svg-icons'

const Player = ({
    timeUpdateHandler,
    songInfo,
    setSongInfo,
    audioRef, 
    currentSong,
    isPlaying,
    setIsPlaying,
    songs,
    setCurrentSong,
    setSongs,
}) => {
    //UseEffect
    //Changes the active element of the songs every time currentSong changes
    useEffect(()=>{
        const newSongs = songs.map((stateSong)=>{
            if(stateSong.id === currentSong.id){
                return{
                    ...stateSong,
                    active: true,
                }
            }else{ //Changes all but the selected song's active to false
                return{
                    ...stateSong,
                    active: false,
                }
            }
        });
        setSongs(newSongs); //Updates state array
    },[currentSong]);

    //Event Handlers:
    //Plays and pauses song when button is clicked, updates button icon
    const playSongHandler = () =>{
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };
    //Changes time when slider is dragged
    const dragHandler = (event) =>{
        audioRef.current.currentTime = event.target.value; //Updates where the song is playing
        setSongInfo({...songInfo, currentTime: event.target.value}); //Update start time numbers
    };

    //Changes the song in the library backwards or forwards (depending on direction)
    const skipTrackHandler = (direction) =>{
        //grab current index of current song
        let currentIndex = songs.findIndex((song)=> song.id==currentSong.id);
        if(direction==='skip-forward'){
            setCurrentSong(songs[(currentIndex+1)%songs.length])
        }
        if(direction==='skip-back'){
            if((currentIndex-1)%songs.length === -1){
                setCurrentSong(songs[songs.length-1]);
                return;
            }
            setCurrentSong(songs[(currentIndex-1)%songs.length])
        }
    };


    //Formats the start/end time of the song to minutes:seconds
    const getTime = (time) =>{
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    };

    //When changing songs it auto plays them if a song was currently being played before the switch
    const autoPlayHandler = () =>{
        if(isPlaying){
            audioRef.current.play();
        }
    };

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
                    onClick={()=> skipTrackHandler('skip-back')}//Arrow function so it doesn't run instantly
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
                    onClick={()=> skipTrackHandler('skip-forward')}
                    className="skip-forward" 
                    size="2x" 
                    icon={faAngleRight}
                />
            </div>
            <audio 
                onLoadedData={autoPlayHandler}
                // happens when audio file loads up
                onLoadedMetadata={timeUpdateHandler}
                onTimeUpdate={timeUpdateHandler}
                ref={audioRef} 
                src={currentSong.audio}
            ></audio>
        </div>
    )
}

export default Player;