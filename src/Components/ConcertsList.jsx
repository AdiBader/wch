import Concert from './Concert'

function ConcertsList({concerts, handlePanel}) {
    
      return (
        <div className='feedback-list'>
            {concerts.map((item, index) => (    
                <Concert item={item} handlePanel={handlePanel} key={index}/> 
            ))
            }
        </div>
    )
    
}
export default ConcertsList