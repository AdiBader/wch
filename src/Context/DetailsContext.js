import { createContext, useState } from 'react';

const DetailsContext = createContext();

export const DetailsProvider = ({ children }) => {
	const [show, setShow] = useState({
		title: 'יאיר גורן',
		wav: 'https://ucb9ae38aa4a6c623d006720e05a.dl.dropboxusercontent.com/cd/0/get/Bmt7IszLRD7yCFr0XF5rgGuGNTj2PDx6VijRdk0bAV-JTWOaZ0GalmgyIl3gXYtbNZhgzqMJ987FlfHPDi5CwvwmJonHl8tq-2dhAkqV9nWIbKXtI5M8efoSxNVaPN2QUb_kNzY732i-L2GafgBGesy6PeXiFFsFBxeGpu3AcOTlxIQc4VBw1HdWk2WRduzkl5o/file',
	});
	const [concertNight, setConcertNight] = useState({
		date: '07/05/2022',
		name: 'פורטרט',
		path: '20220507 פורטרט',
	});

	// Fetch shows
	function playPanel(concert, show1) {
		setConcertNight(concert);
		setShow(show1);
	}

	return (
		<DetailsContext.Provider
			value={{
				playPanel,
				show,
				concertNight,
			}}
		>
			{children}
		</DetailsContext.Provider>
	);
};

export default DetailsProvider;
