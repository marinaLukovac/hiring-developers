import Developer from './Developer';
import DevelopersPreview from '../../styled-components/DevelopersPreview';
import Button from '../../styled-components/Button';
import { Link } from 'react-router-dom';

const ListDevelopers = ({ developers, setSelectedDevs, selectedDevs, setDevelopers, procedure }) => {
	return (
		<DevelopersPreview>
			{developers.length ? (
				developers.map(dev => <Developer key={dev.id} devInfo={dev} procedure={procedure} setSelectedDevs={setSelectedDevs} selectedDevs={selectedDevs} setDevelopers={setDevelopers} />)
			) : (
				<Link to="/hire/select-date">
					<Button>FIRST SELECT WORK PERIOD</Button>
				</Link>
			)}
		</DevelopersPreview>
	);
};

export default ListDevelopers;
