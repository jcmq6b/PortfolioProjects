//Importing styles
import './styles/app.scss'

//Importing components
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import LibrarySong from './components/LibrarySong'

//Import song data
import data from './data';
import { useState } from 'react';

function App() {
  //State
  const [songs, setSongs] = useState(data()); //data() returns the data.js object
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false); //music is not playing by default

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}/>
      <Library songs={songs} currentSong={currentSong}/>
    </div>
  );
}

export default App;
