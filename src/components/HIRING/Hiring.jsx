import { Route, Routes } from 'react-router-dom';
import MainHeader from '../MainHeader';
import Confirm from './Confirm';
import ListDevelopers from './ListDevelopers';
import SelectDate from './SelectDate';

const Hiring = ({ procedure, setProcedure, developers, setDevelopers, availableDevelopers, setSelectedDate, selectedDevs, setSelectedDevs, selectedDate }) => {
	const displayedDevelopers = [];
	for (let i = 0; i < availableDevelopers.length; i++) {
		let dev = developers.find(dev => dev.login.uuid === availableDevelopers[i]);
		dev && displayedDevelopers.push(dev);
	}
	return (
		<>
			<MainHeader availableDevelopers={availableDevelopers} selectedDevs={selectedDevs} selectedDate={selectedDate} />
			<Routes>
				<Route path="select-date" element={<SelectDate setSelectedDate={setSelectedDate} />} />
				<Route path="select-developer" element={<ListDevelopers developers={displayedDevelopers} setSelectedDevs={setSelectedDevs} procedure={procedure} />} />
				<Route path="confirm" element={<Confirm setSelectedDevs={setSelectedDevs} selectedDevs={selectedDevs} developers={displayedDevelopers} setSelectedDate={setSelectedDate} />} />
			</Routes>
		</>
	);
};

export default Hiring;
