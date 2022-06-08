import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Details from "../Components/Details";


function Page({concert, playPanel}) {
    const waLink='https://pub-ghm.netlify.app/' + encodeURI(concert.path) 

  return (
    <>
        <div className='containerBG'></div>
        <div className='concertPageDiv'>
            <h1>{concert.name}</h1>
            <div>רשימת הקלטות:</div>
            <Details concert={concert} playPanel={playPanel} fromPage={true} />
            <Link className='backHome' to='/'>Back to home</Link>
            <a className='WAbutton' title="Share the page on wahtsapp" href={'whatsapp://send?text= ארכיון הקלטות היכל הרוק של ישראל - פאב גבעת חיים מאוחד -  '+ concert.name +' - '+ encodeURI(waLink)} data-action="share/whatsapp/share" target="_blank" rel="noreferrer"> <FaWhatsapp /> </a>   
        </div>
    </>
  )
}

export default Page