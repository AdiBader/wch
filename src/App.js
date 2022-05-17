
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

const getUrl = "http://pubghm.herokuapp.com/main.json"

function App() {
    const [panel, setPanel] = useState({"title":"אוזו בזוקה","wav":"https://uc26fddab1406c023574b7c7013a.dl.dropboxusercontent.com/cd/0/get/BlAO-aKOja14l8OIErEYibZDyCiIRw0vmiFGSK8neZJiW0ntjVPfsLPmmDaLiyGaWgvaoMf4DlC6qhngvwHcfqDsDvGisYPKsorYsl1OuqHl0u-KqTwZLzCNlskdYLPBxuTiktHu86N2kuTCAz5nc6SroMPjBBzoes2bXNBO90AznHKlL84oKkQgzAF-PCPu0sY/file"})
    const [panelName, setPanelName] = useState({"date":"18/05/2019","name":"אוזו בזוקה","path":"20190518 אוזו בזוקה"})
    const [concerts, setConcerts] = useState([])
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
    }

    const handlePanel = (name, concert) => {
        setPanelName(name)
        setPanel(concert)
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
            <Page concert={concert} handlePanel={handlePanel} />
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
    
      <ConcertsList concerts={filteredConcerts} handlePanel={handlePanel}/>
      
    </div>
    }>
                
    </Route>

    
    
    </Routes>
    <Panel panel={panel} panelName={panelName} />
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