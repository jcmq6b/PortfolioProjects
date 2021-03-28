import {React} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMusic} from '@fortawesome/free-solid-svg-icons'
import DarkMode from './DarkMode'

const Nav = ({libraryStatus, setLibraryStatus, setDarkMode, darkMode}) =>{
    return(
        <nav>
            <h1>Chill Vibes</h1>
            <button className="mode-color" onClick={()=>setLibraryStatus(!libraryStatus)}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
            <DarkMode 
                setDarkMode = {setDarkMode}
                darkMode = {darkMode}
            />
        </nav>
    );
}

export default Nav