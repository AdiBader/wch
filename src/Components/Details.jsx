import { FiPlay } from 'react-icons/fi';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Spinner from './shared/spinner';

function Details({ concert, playPanel, fromPage }) {
	const [showsData, setShowsData] = useState([]);
	const [showsPlaylist, setShowsPlaylist] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const url = `https://pubghm.herokuapp.com/main/${concert.path}.json`;

	useEffect(() => {
		// Fetch shows
		const fetchShowsList = async () => {
			const response = await axios.get(url);
			setShowsData(response.data);
			setShowsPlaylist(response.data.wavs);
			setIsLoading(false);
		};
		fetchShowsList();
	}, [concert, url]);

	return isLoading ? (
		<Spinner />
	) : (
		<div className='detailsDiv'>
			<form>
				{showsPlaylist.map((show, index) => (
					<div
						className='shows'
						key={index}
						onClick={() => playPanel(concert, show, showsPlaylist)}
					>
						<div className='playConcert'>
							<FiPlay style={{ color: 'pink' }} />
							<div className='playTitle'>{show.name}</div>
						</div>
					</div>
				))}
			</form>
			{fromPage && (
				<div className='detailsBlock'>
					{showsData.jpg && (
						<img className='detailsPic' src={showsData.jpg} alt='poster' />
					)}
					{showsData.text && <p className='detailsTxt'>{showsData.text}</p>}
				</div>
			)}
		</div>
	);
}

export default Details;
