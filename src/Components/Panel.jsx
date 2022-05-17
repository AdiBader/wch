import AudioPlayer from "react-h5-audio-player";
import './audio-player-style.scss'
import { Link } from 'react-router-dom'


function Panel({ panel, panelName }) {

return (
        <div className="panel" style={{color: "#fff"}}>
        <div className="panelTitles">
            <h2 style={{fontWeight: "bold", fontSize: "24px", color: "pink"}}>{panel.title}</h2>
            <Link className='toPage' to={panelName.path} ><span>{panelName.date}</span></Link>
        </div>
           
                <div className='panelShow'  >
                    <AudioPlayer
                        autoPlay
                        showFilledVolume = 'true' 
                        src={panel.wav}
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