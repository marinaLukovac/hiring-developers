import { Link } from 'react-router-dom';
import Button from '../../styled-components/Button';
import DevelopersPreview from '../../styled-components/DevelopersPreview';
import SelectedDev from './SelectedDev';

const Confirm = ({ setSelectedDevs, developers, selectedDevs, setSelectedDate }) => {
	const displayed = [];
	for (let i = 0; i < selectedDevs.length; i++) {
		let dev = developers.find(dev => dev.login.uuid === selectedDevs[i]);
		dev && displayed.push(dev);
	}
	const hiringProcess = () => {
		setSelectedDevs([]);
		setSelectedDate({ start: null, end: null });
	};
	return (
		<DevelopersPreview>
			{displayed.length ? (
				displayed.map(dev => <SelectedDev key={dev.login.uuid} devInfo={dev} setSelectedDevs={setSelectedDevs} />)
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
