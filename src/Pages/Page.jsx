
import { Link } from 'react-router-dom'
import Details from "../Components/Details";


function Page({concert, playPanel}) {
    

  return (
    <>
        <div className='containerBG'></div>
        <div className='concertPageDiv'>
            <h1>{concert.name}</h1>
            <div>רשימת הקלטות:</div>
            <Details concert={concert} playPanel={playPanel} />
            <Link className='backHome' to='/'>Back to home</Link>
        </div>
    </>
  )
}

export default Page