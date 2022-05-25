import AudioPlayer from "react-h5-audio-player";
import './audio-player-style.scss'
import { Link } from 'react-router-dom'


function Panel({ concertNight, show }) {

return (
        <div className="panel" style={{color: "#fff"}}>
        <div className="panelTitles">
            <h2 style={{color: "pink"}}>{show? show.title: '---'}</h2>
            <Link className='toPage' to={concertNight? concertNight.path : '/'} ><span>{concertNight? concertNight.date : '123'}</span></Link>
        </div>
           
                <div className='panelShow'  >
                    <AudioPlayer
                        autoPlay
                        showFilledVolume = 'true' 
                        src={show? show.wav: ''}
                        onPlay={e => console.log("onPlay")}
                        // other props here
                    />
                        
               
                   
                
            </div>

        </div>
        )
}

export default Panel

// {showsList.map((item, index) => (
               
//     <div className='shows' key={index} >
//     <div style={{color: "#fff"}}>{item.title}</div>
//         <audio controls autostart="true" autoPlay src={item.wav} />
//     </div>
   
// ))
// }

// <audio controls autostart="true" autoPlay src={panel.wav} />