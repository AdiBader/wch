// import { useState, useEffect, useContext } from "react"
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { HiDotsHorizontal } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useState } from "react";
import Details from './Details';

function Concert({concert, playPanel}) {
    const [isToggleOn, setIsToggleOn] = useState(false)
    const [toggleBg, setToggleBg] = useState('') 
    
    function handleToggle() {
        setIsToggleOn(prev => !prev)       
        !isToggleOn ? setToggleBg('toggleBg') : setToggleBg('')
    }

  return (
    <div className={'concertItem ' + toggleBg} >
    <div className='concertDiv' onClick={handleToggle}>
        <h2 className='concertName'>{concert.name}</h2>
        <div className='concertDate'>{concert.date}</div>
        {isToggleOn ? <FaChevronDown className='iconR chevron' /> : <FaChevronUp className='iconR chevron' 
        />}
        <Link to={concert.path}>
            <HiDotsHorizontal className='iconR dots3' />
        </Link>
    </div>
        {isToggleOn && <Details concert={concert} playPanel={playPanel} fromPage={false} /> }       
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