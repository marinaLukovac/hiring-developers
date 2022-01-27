import { useEffect, useState } from 'react';
import { getDevelopers } from './service';
import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './styled-components/GlobalStyle';
import Welcome from './components/Welcome';
import Hiring from './components/HIRING/Hiring';
import ManageDevelopers from './components/MANAGING/ManageDevelopers';
import EditDeveloper from './components/MANAGING/EditDeveloper';
import AllDevelopers from './components/MANAGING/AllDevelopers';
import SuccessPage from './components/SuceessPage';

function App() {
	//when adding login and credentials, access would be allowed based on procedure
	const [procedure, setProcedure] = useState('');
	const [developers, setDevelopers] = useState([]);

	useEffect(() => {
		!developers.length && getDevelopers().then(res => setDevelopers([...res.data]));
	}, [developers]);

	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/*" element={<Navigate to="/hiring-developers" />} />
				<Route path="/hiring-developers" element={<Welcome setProcedure={setProcedure} />} />
				<Route path="/hire/*" element={<Hiring procedure={procedure} setProcedure={setProcedure} developers={developers} setDevelopers={setDevelopers} />}></Route>
				<Route path="/manage/*" element={<ManageDevelopers developers={developers} setDevelopers={setDevelopers} procedure={procedure} />}>
					<Route path="all" element={<AllDevelopers developers={developers} procedure={procedure} setDevelopers={setDevelopers} />} />
					<Route path="all/:devId" element={<EditDeveloper developers={developers} setDevelopers={setDevelopers} />} />
				</Route>
				<Route path="/success/:success" element={<SuccessPage to="/hiring-developers" />} />
			</Routes>
		</>
	);
}

export default App;
