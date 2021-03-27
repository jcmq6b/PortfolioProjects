//This component shows the song, name, artist, and picture

import React from 'react';

const LibrarySong = ({setSongs,isPlaying, audioRef, setCurrentSong,songs,song,id}) => {

    const songSelectHandler = () =>{
        setCurrentSong(song);
        const newSongs = songs.map((stateSong)=>{
            if(stateSong.id === id){
                return{
                    ...stateSong,
                    active: true,
                }
            }else{
                return{
                    ...stateSong,
                    active: false,
                }
            }
        });
        setSongs(newSongs);
    };

    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active?'selected':""}`}>
            <img src={song.cover} alt="cover-image"></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;