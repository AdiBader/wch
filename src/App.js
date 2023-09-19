import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { isMobile } from 'react-device-detect';

import Header from './Components/Header';
import ConcertsList from './Components/ConcertsList';
import AboutPage from './Pages/AboutPage';
import Page from './Pages/Page';
import Panel from './Components/Panel';
import ScrollToTop from './Components/ScrollToTop';
import { DetailsProvider } from './Context/DetailsContext';

const getUrl = 'http://pubghm.herokuapp.com/main.json';

function App() {
	const [show, setShow] = useState([]);
	const [concertNight, setConcertNight] = useState({
		date: '',
		name: '',
		path: '',
	});
	const [showsPlaylist, setShowsPlaylist] = useState([]);
	const [concerts, setConcerts] = useState([]);
	const [filteredConcerts, setFilteredConcerts] = useState(concerts);
	const [searchField, setSearchField] = useState('');
	const [active, setActive] = useState(false);

	useEffect(() => {
		fetchConcerts();
	}, []);

	useEffect(() => {
		const newFilterdConcerts = concerts.filter((concert) => {
			return concert.name.toLocaleLowerCase().includes(searchField);
		});
		setFilteredConcerts(newFilterdConcerts);
	}, [concerts, searchField]);

	// Fetch concerts
	const fetchConcerts = async () => {
		const response = await axios.get(getUrl);
		setConcerts(response.data);
	};

	const playPanel = (concertNight, show, showsPlaylist) => {
		setConcertNight(concertNight);
		setShow(show);
		setShowsPlaylist(showsPlaylist);
	};

	const handleChange = (e) => {
		const tempSearchField = e.target.value.toLocaleLowerCase();
		setSearchField(tempSearchField);
	};

	const toggleSearch = () => {
		setActive((prev) => !prev);
		active && setSearchField('');
	};

	return (
		<React.StrictMode>
			<DetailsProvider>
				<Router>
					<div className='container' id='container'>
						<Header
							handleChange={handleChange}
							toggleSearch={toggleSearch}
							active={active}
						/>

						<Routes>
							{concerts.map((concert, key) => (
								<Route
									path={encodeURI(concert.path)}
									key={key}
									element={<Page concert={concert} playPanel={playPanel} />}
								></Route>
							))}

							<Route exact path='/about' element={<AboutPage />} />

							<Route
								exact
								path='/'
								element={
									<div className={isMobile ? 'App mobile' : 'App'}>
										<div className='containerBG'></div>
										<ConcertsList
											concerts={filteredConcerts}
											playPanel={playPanel}
										/>
									</div>
								}
							></Route>
						</Routes>
						<ScrollToTop />
						<Panel
							show={show}
							concertNight={concertNight}
							showsPlaylist={showsPlaylist}
						/>
					</div>
				</Router>
			</DetailsProvider>
		</React.StrictMode>
	);
}

export default App;
