// import { useState, useEffect, useContext } from "react"
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from "react";
import Details from './Details';



function Concert({item, handlePanel}) {
    const [isToggleOn, setIsToggleOn] = useState(false)
    const [toggleBg, setToggleBg] = useState('') 

    function handleToggle() {
        setIsToggleOn(prev => !prev)       
        !isToggleOn ? setToggleBg('toggleBg') : setToggleBg('')
    }

  return (
    <div className={'concertItem ' + toggleBg} >
    <div className='concertDiv' onClick={handleToggle}>
        <h1 className='concertName'>{item.name}</h1>
        <div className='concertDate'>{item.date}</div>
        <Link to={item.path}>
            <FaQuestion size={10} />
        </Link>
    </div>
        {isToggleOn ? <Details concert={item} handlePanel={handlePanel} /> : null}       
    </div>
    )
}

export default Concert

/* {playlist.map((show, index) => (
            <div className="insideConcert" key={index}>
                <div className="title">{show.title}</div>
                <div>{show.wav}</div>
            </div>
        ))}
*/