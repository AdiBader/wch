import { FiPlay } from 'react-icons/fi'
import axios from "axios";
import { useState, useEffect } from "react";

import Spinner from './shared/spinner';

function Details({concert, playPanel}) {
    const [showsData, setShowsData] = useState([])
    const [showsPlaylist, setShowsPlaylist] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const url = `https://pubghm.herokuapp.com/main/${concert.path}.json`
    
    useEffect(() => {
        fetchShowsList()
    }, [concert])
    
    // Fetch shows
    const fetchShowsList = async () => {
        const response = await axios.get(url); 
        setShowsData(response.data)    
        setShowsPlaylist(response.data.playlist)
        setIsLoading(false)     
    }

  return isLoading ? <Spinner /> : (
    <div className="detailsDiv">
        <form >
            {showsPlaylist.map((show, index) => ( 
                    <div className='shows' key={index} onClick={() => playPanel(concert, show, showsPlaylist)}>
                        <div className="playConcert"><FiPlay style={{color: "pink"}}/><div className="playTitle">{show.title}</div></div>
                    </div>                                  
                ))
            }
        </form>
        <div className="detailsBlock">
            {showsData.jpg && <img className="detailsPic" src={showsData.jpg} alt='poster' />}
            {showsData.text && <p className="detailsTxt">{showsData.text}</p>}
        </div>
    </div>
  )
       
}

export default Details