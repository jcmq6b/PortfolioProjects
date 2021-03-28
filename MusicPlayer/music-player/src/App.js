//Importing styles
import './styles/app.scss'

//Importing components
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import LibrarySong from './components/LibrarySong'
import Nav from './components/Nav'

//Import song data
import data from './data';
import { useState, useRef } from 'react';

function App() {
  //State
  const [songs, setSongs] = useState(data()); //data() returns the data.js object
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false); //music is not playing by default
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [darkMode, setDarkMode] = useState(false); //fase is light mode, true = dark mode
  
  //Ref (to access html elements)
  const audioRef = useRef(null);
  
  //Function to update the start time and end time of the song playing (in state)
  const timeUpdateHandler = (event) =>{
    const current = event.target.currentTime;
    const duration = event.target.duration || 0;

    //update the animation of the input bar
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent/roundedDuration)*100) ;

    setSongInfo({...songInfo, currentTime: current, duration: duration, animationPercentage: animation});
};

  return (
    <div className={`App ${libraryStatus ? 'library-active':''}`} id={`${darkMode ? 'dark':'light'}`}>
      <Nav 
        setDarkMode = {setDarkMode}
        darkMode = {darkMode}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Song 
        currentSong={currentSong}
      />
      <Player
        audioRef={audioRef} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        timeUpdateHandler={timeUpdateHandler}
        songs={songs} 
        setCurrentSong={setCurrentSong}
        setSongs={setSongs} 
      />
      <Library 
        setCurrentSong={setCurrentSong} 
        songs={songs} 
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
    </div>
  );
}

export default App;
