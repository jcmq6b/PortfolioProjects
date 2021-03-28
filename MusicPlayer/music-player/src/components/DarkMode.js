import {React, useState, useRef} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons'





const DarkMode = ({setDarkMode, darkMode}) =>{
    const [icons, setIcon] = useState(faSun);

    const modeButtonHandler = () => {
        setDarkMode(!darkMode);
        let mode = darkMode?faSun:faMoon
        setIcon(mode);
    };

    return(
        <button id="mode-space" className="mode-color" onClick={modeButtonHandler}>
            <FontAwesomeIcon id="switch" icon={icons} />
        </button>
    )
};

export default DarkMode