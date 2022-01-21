import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ListDevelopers from './components/ListDevelopers';
import SelectDate from './components/SelectDate';
import { getDevelopers } from './service';
import GlobalStyle from './styled-components/GlobalStyle';
import Wrapper from './styled-components/Wrapper';

function App() {
	const [developers, setDevelopers] = useState([]);
	useEffect(() => {
		getDevelopers().then(res => setDevelopers([...res.data]));
	}, []);

	return (
		<BrowserRouter>
			<GlobalStyle />
			<SelectDate />
			<Wrapper>
				<ListDevelopers developers={developers} />
			</Wrapper>
		</BrowserRouter>
	);
}

export default App;
