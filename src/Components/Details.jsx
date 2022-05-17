import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiPlay } from 'react-icons/fi'

function Details({concert, handlePanel}) {
    
    const [showsList, setShowsList] = useState([])
    const [showsData, setShowsData] = useState([])
        
    // const getUrl = "http://localhost:5000/playlist"
    
    const url = `https://pubghm.herokuapp.com/main/${concert.path}.json`
   

    // const getUrl = `http://pubghm.herokuapp.com/main/${panel.path}.json`
    
    useEffect(() => {
        fetchShowsList()
            
    }, [concert])
    
    // Fetch feedbacks
    const fetchShowsList = async () => {
        const response = await axios.get(url); 
        setShowsData(response.data)       
        setShowsList(response.data.playlist);
        
    }

   
  return (
    <div className="detailsDiv">
        <form >
            {showsList.map((item, index) => ( 
                    <div className='shows' key={index} onClick={() => handlePanel(concert, item)}>
                        <div className="playConcert"><FiPlay style={{color: "pink"}}/><div className="playTitle">{item.title}</div></div>
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