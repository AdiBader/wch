
import './App.css';
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ConcertsList from './Components/ConcertsList';
import AboutPage from './Pages/AboutPage';
import AboutIconLink from './Components/AboutIconLink';
import axios from "axios";
import { Link } from 'react-router-dom'

import Panel from './Components/Panel';
import SearchBox from './Components/SearchBox';
import Page from './Pages/Page';
import Spinner from './Components/shared/spinner';

const getUrl = "https://pubghm.herokuapp.com/main.json"

function App() {
    const [show, setShow] = useState([])
    const [concertNight, setConcertNight] = useState({"date":"","name":"","path":""})
    const [concerts, setConcerts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [filteredConcerts, setFilteredConcerts] = useState(concerts)
    const [searchField, setSearchField] = useState('')
    
    useEffect(() => {
        fetchConcerts()
        
    }, [])

    useEffect(() => {
        const newFilterdConcerts = concerts.filter((concert) => {
          return concert.name.toLocaleLowerCase().includes(searchField);
        });
        setFilteredConcerts(newFilterdConcerts);
      }, [concerts, searchField]);

    // Fetch concerts
    const fetchConcerts = async () => {
        const response = await axios.get(getUrl, {mode: 'no-cors'})      
        setConcerts(response.data); 
        setIsLoading(false)       
    }

    const playPanel = (concertNight, show) => {
        setConcertNight(concertNight)
        setShow(show)
    }

    const handleChange = (e) => {
        const tempSearchField = e.target.value.toLocaleLowerCase();
        setSearchField(tempSearchField)
    }

    function encode(path) {
        return encodeURI(path);
    }


  return (
    <React.StrictMode>
    <Router>
    <div className='container'>
    
    <header className='header'>
    <SearchBox 
        placeholder='חפש/י מופע' 
        handleChange={handleChange} 
        />
    <AboutIconLink />
    <Link to='/'>
        <img src='/Images/wch-logo.png' className='wch-logo' alt='logo' title='logo' />
    </Link>
</header>
    
    <Routes>
    {
    concerts.map((concert, key) => (
        <Route path={encode(concert.path)} key={key} element={
            <Page concert={concert} playPanel={playPanel} />
        }>
        </Route>
    ))
}
    
    <Route exact path='/about' element={    
        <AboutPage />
    } />
    
    <Route exact path='/'
    element={
    <div className="App">
    <div className='containerBG'></div>
    {isLoading ? <Spinner style={{paddingBottom: '300px'}} /> : <ConcertsList concerts={filteredConcerts} playPanel={playPanel}  />}
      
    </div>
    }>            
    </Route>
    </Routes>

    <Panel show={show} concertNight={concertNight} />
    </div>
    </Router>
    </React.StrictMode>
  );
}

export default App;


// {
//     concerts.map((concert, key) => (
//         <Route exact path={`/${concert.path}`} key={key} element={
//             <Page concert={concert} />
//         } />
//     ))
// }