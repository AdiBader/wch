import { GoSearch } from 'react-icons/go'
import { MdClose } from 'react-icons/md'
import {isMobile} from 'react-device-detect';



function SearchBox({ handleChange, toggleSearch, active }) {
   
  return (
    <div className={'searchBox'}> 
            {isMobile && !active ? <GoSearch className='searchIcons goSearch' style={{color:'#fff'}} onClick={toggleSearch} /> :
            <div className='inputDiv'>
                <MdClose className='searchIcons close' style={{color:'#fff'}} onClick={toggleSearch} />
                <input
                    className='search'
                    type='search' 
                    placeholder="חפש/י מופע"
                    autoFocus={isMobile}
                    onChange={(e) => handleChange(e)} 
                />  
            </div>}
        
    
   
     
    </div>
  )
}

export default SearchBox