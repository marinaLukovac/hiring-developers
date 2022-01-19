import axios from 'axios';
import './App.css';

function App() {
	const getRandomUsers = async () => {
		axios.get('https://randomuser.me/api/?results=50').then(res => console.log(JSON.stringify(res.data.results)));
	};
	return (
		<div className="App">
			<button onClick={getRandomUsers}>get users</button>
		</div>
	);
}

export default App;
