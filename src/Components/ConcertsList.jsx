import Concert from './Concert'

function ConcertsList({concerts, playPanel}) {
    
      return (
        <div className='feedback-list'>
            {concerts.map((concert, index) => (       
                <Concert concert={concert} playPanel={playPanel} key={index}/> 
            ))
            }
        </div>
    )
    
}
export default ConcertsList