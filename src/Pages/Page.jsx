
import { Link } from 'react-router-dom'
import Details from "../Components/Details";


function Page({concert, handlePanel}) {
    

  return (
    <div className='concertPageDiv'>
        <h1>{concert.name}</h1>
        <div>shalom!</div>
        <Details concert={concert} handlePanel={handlePanel} />
        <Link className='backHome' to='/'>Back to home</Link>

        </div>
  )
}

export default Page