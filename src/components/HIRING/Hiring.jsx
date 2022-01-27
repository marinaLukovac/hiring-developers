import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainHeader from './MainHeader';
import SelectDate from './SelectDate';
import ListDevelopers from './ListDevelopers';
import Confirm from './Confirm';
import { checkDevAvailability } from '../../isDevAvailable';

const Hiring = ({ procedure, setProcedure, developers, setDevelopers }) => {
	const [displayDevs, setDisplayDevs] = useState([]);
	const [selectedDevs, setSelectedDevs] = useState([]);
	const [selectedDate, setSelectedDate] = useState({ starting: null, ending: null });

	useEffect(() => {
		if (selectedDate.starting) {
			const current = Date.now();
			setDisplayDevs(developers.filter(developer => checkDevAvailability(current, selectedDate, developer.hiringPeriods)));
		}
	}, [developers, selectedDate]);

	return (
		<>
			<MainHeader countAvailableDevs={displayDevs.length} countSelectedDevs={selectedDevs.length} selectedDate={selectedDate} />
			<Routes>
				<Route path="select-date" element={<SelectDate setSelectedDate={setSelectedDate} />} />
				<Route path="select-developer" element={<ListDevelopers developers={displayDevs} setDevelopers={setDevelopers} setSelectedDevs={setSelectedDevs} selectedDevs={selectedDevs} procedure={procedure} />} />
				<Route
					path="confirm"
					element={<Confirm setSelectedDevs={setSelectedDevs} selectedDevs={selectedDevs} developers={displayDevs} setDisplayDevs={setDisplayDevs} setDevelopers={setDevelopers} selectedDate={selectedDate} setSelectedDate={setSelectedDate} displayDevs setProcedure={setProcedure} />}
				/>
			</Routes>
		</>
	);
};

export default Hiring;
