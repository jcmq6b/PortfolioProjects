//This component shows the song, name, artist, and picture

import React from 'react';

const Song = ({currentSong}) => {
    return(
        <div className="song-container">
            <div id="cover-wrapper" style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}}>
                <img src={currentSong.cover} alt="cover-image"></img>
            </div>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}

export default Song;