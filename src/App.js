import { useEffect, useState } from 'react';
import { getDevelopers, postDeveloper } from './service';
import { checkDevAvailability } from './isDevAvailable';
import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './styled-components/GlobalStyle';
import Welcome from './components/Welcome';
import Hiring from './components/HIRING/Hiring';
import ManageDevelopers from './components/MANAGING/ManageDevelopers';
import EditDeveloper from './components/MANAGING/EditDeveloper';
import AllDevelopers from './components/MANAGING/AllDevelopers';

function App() {
	//when adding login and credentials, access would be allowed based on procedure
	const [procedure, setProcedure] = useState('');
	const [developers, setDevelopers] = useState([]);
	const [availableDevelopers, setAvailableDevelopers] = useState([]);
	const [selectedDevs, setSelectedDevs] = useState([]);
	const [selectedDate, setSelectedDate] = useState({ start: null, end: null });

	useEffect(() => {
		!developers.length && getDevelopers().then(res => setDevelopers([...res.data]));
	}, [developers]);
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
	const fixTheData = () => {
		developers.forEach(dev => {
			const hiringPeriods = [];
			dev.hiringPeriods.forEach(period => {
				hiringPeriods.push({ starting: period.starting, ending: period.ending, userKey: `com${Math.ceil(Math.random() * 11)}` });
			});
			const developer = {
				firstName: dev.name.first || '',
				lastName: dev.name.last || '',
				email: dev.email || '',
				phone: dev.phone || '',
				location: dev.location.city || '',
				picture: dev.picture.large || '',
				pricePH: dev.pricePH || 50,
				technology: dev.technology || '',
				desc: '',
				yoExperience: dev.yoExperience || 1,
				language: dev.language,
				linkedIn: '',
				id: dev.login.uuid,
				hiringPeriods: hiringPeriods,
			};
			postDeveloper(developer);
		});
	};

	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/*" element={<Navigate to="/hiring-developers" />} />
				<Route path="/hiring-developers" element={<Welcome setProcedure={setProcedure} />} />
				<Route
					path="/hire/*"
					element={
						<Hiring
							procedure={procedure}
							setProcedure={setProcedure}
							availableDevelopers={availableDevelopers}
							developers={developers}
							setDevelopers={setDevelopers}
							selectedDate={selectedDate}
							setSelectedDate={setSelectedDate}
							selectedDevs={selectedDevs}
							setSelectedDevs={setSelectedDevs}
							fixTheData={fixTheData}
						/>
					}
				></Route>
				<Route path="/manage/*" element={<ManageDevelopers developers={developers} setDevelopers={setDevelopers} procedure={procedure} />}>
					<Route path="all" element={<AllDevelopers developers={developers} procedure={procedure} setDevelopers={setDevelopers} />} />
					<Route path="all/:devId" element={<EditDeveloper developers={developers} setDevelopers={setDevelopers} />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
