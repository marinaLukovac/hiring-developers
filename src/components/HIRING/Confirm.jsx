import { Link, useNavigate } from 'react-router-dom';
import { hireDeveloper } from '../../service';
import Button from '../../styled-components/Button';
import DevelopersPreview from '../../styled-components/DevelopersPreview';
import SelectedDev from './SelectedDev';

const Confirm = ({ setSelectedDevs, developers, selectedDevs, selectedDate, setSelectedDate, setDevelopers, setDisplayDevs }) => {
	const displayed = [];
	const history = useNavigate();
	for (let i = 0; i < selectedDevs.length; i++) {
		let dev = developers.find(dev => dev.id === selectedDevs[i]);
		dev && displayed.push(dev);
	}
	const hiringProcess = () => {
		//default user is Prime Softvare: userKey: primeSof1
		const userKey = 'primeSof1';
		let response = true;
		displayed.forEach(dev => {
			const hiringPeriods = [...dev.hiringPeriods, { starting: selectedDate.starting, ending: selectedDate.ending, userKey: userKey }];
			response = hireDeveloper(hiringPeriods, dev.id);
			//check about catching promise
		});
		setSelectedDevs([]);
		setSelectedDate({ starting: null, ending: null });
		setDisplayDevs([]);
		setDevelopers([]);
		response ? history('/success/hired') : history('/success/false');
	};
	return (
		<DevelopersPreview>
			{displayed.length ? (
				displayed.map(dev => <SelectedDev key={dev.id} devInfo={dev} setSelectedDevs={setSelectedDevs} />)
			) : (
				<Link to="/hire/select-developer">
					<h3>NO DEVELOPERS SELECTED</h3>
				</Link>
			)}
			<Button className="hire-btn" onClick={hiringProcess}>
				HIRE
			</Button>
		</DevelopersPreview>
	);
};

export default Confirm;
