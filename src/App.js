import { useEffect, useState } from 'react';
import { getDevelopers } from './service';
import GlobalStyle from './styled-components/GlobalStyle';
import Welcome from './components/Welcome';
import { checkDevAvailability } from './isDevAvailable';
import { Routes, Route, Navigate } from 'react-router-dom';
import Hiring from './components/HIRING/Hiring';
import ManageDevelopers from './components/MANAGING/ManageDevelopers';
import EditDeveloper from './components/MANAGING/EditDeveloper';
// import MainHeader from './components/MainHeader';
// import SelectDate from './components/HIRING/SelectDate';
// import ListDevelopers from './components/HIRING/ListDevelopers';
// import Confirm from './components/HIRING/Confirm';

function App() {
	const [procedure, setProcedure] = useState('');
	const [developers, setDevelopers] = useState([]);
	const [availableDevelopers, setAvailableDevelopers] = useState([]);
	const [selectedDevs, setSelectedDevs] = useState([]);
	const [selectedDate, setSelectedDate] = useState({ start: null, end: null });
	console.log('developers', developers);
	console.log('selectedDevelopers', selectedDevs);
	console.log('availableDevelopers', availableDevelopers);

	useEffect(() => {
		getDevelopers().then(res => setDevelopers([...res.data]));
	}, []);
	useEffect(() => {
		if (selectedDate.start) {
			setAvailableDevelopers([]);
			const current = Date.now();
			developers.forEach(developer => {
				let devAvailable = checkDevAvailability(current, selectedDate, developer.hiringPeriods);
				devAvailable &&
					setAvailableDevelopers(prev => {
						let temp = [...prev];
						temp.push(developer.login.uuid);
						return temp;
					});
				return;
			});
		}
	}, [developers, selectedDate]);

	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Navigate to="/hiring-developers" />} />
				<Route path="/hiring-developers" element={<Welcome setProcedure={setProcedure} />} />
				<Route
					path="/hire/*"
					element={<Hiring procedure={procedure} setProcedure={setProcedure} availableDevelopers={availableDevelopers} developers={developers} setDevelopers={setDevelopers} selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedDevs={selectedDevs} setSelectedDevs={setSelectedDevs} />}
				/>
				<Route path="/manage/all" element={<ManageDevelopers developers={developers} />} />
				<Route path="/manage/:id" element={<EditDeveloper developers={developers} setDevelopers={setDevelopers} />} />
			</Routes>
		</>
	);
}

export default App;
