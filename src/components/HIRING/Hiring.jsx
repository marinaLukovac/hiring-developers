import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainHeader from './MainHeader';
import SelectDate from './SelectDate';
import ListDevelopers from './ListDevelopers';
import Confirm from './Confirm';

const Hiring = ({ procedure, setProcedure, developers, setDevelopers, availableDevelopers, setSelectedDate, selectedDevs, setSelectedDevs, selectedDate }) => {
	const [displayDevs, setDisplayDevs] = useState([]);
	useEffect(() => {
		const temp = [];
		for (let i = 0; i < availableDevelopers.length; i++) {
			let dev = developers.find(dev => dev.login.uuid === availableDevelopers[i]);
			dev && temp.push(dev);
		}
		setDisplayDevs(temp);
	}, [availableDevelopers, developers]);

	return (
		<>
			<MainHeader availableDevelopers={availableDevelopers} selectedDevs={selectedDevs} selectedDate={selectedDate} />
			<Routes>
				<Route path="select-date" element={<SelectDate setSelectedDate={setSelectedDate} />} />
				<Route path="select-developer" element={<ListDevelopers developers={displayDevs} setSelectedDevs={setSelectedDevs} procedure={procedure} />} />
				<Route path="confirm" element={<Confirm setSelectedDevs={setSelectedDevs} selectedDevs={selectedDevs} developers={displayDevs} setDisplayDevs={setDisplayDevs} setDevelopers={setDevelopers} setSelectedDate={setSelectedDate} displayDevs setProcedure={setProcedure} />} />
			</Routes>
		</>
	);
};

export default Hiring;
