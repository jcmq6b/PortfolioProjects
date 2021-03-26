//This component is the controls for the music player

import React from 'react';


const Player = () => {
    return(
        <div className="player">
            <div className="time-control">
                 {/* Slider that controls time  */}
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-control">

            </div>
        </div>
    )
}

export default Player;