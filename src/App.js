
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


const getUrl = "https://pubghm.herokuapp.com/main.json"

function App() {
   
    const [concerts, setConcerts] = useState([])
    const [filteredConcerts, setFilteredConcerts] = useState(concerts)
    const [searchField, setSearchField] = useState('')

     const [show, setShow] = useState([])
    const [concertNight, setConcertNight] = useState({"date":"","name":"","path":"/"})
    
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
    <ConcertsList concerts={filteredConcerts} playPanel={playPanel}  />
      
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