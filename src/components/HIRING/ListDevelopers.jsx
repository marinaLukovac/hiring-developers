import Developer from './Developer';
import DevelopersPreview from '../../styled-components/DevelopersPreview';
import Button from '../../styled-components/Button';
import { Link } from 'react-router-dom';

const ListDevelopers = ({ developers, setSelectedDevs, setDevelopers, procedure }) => {
	return (
		<DevelopersPreview>
			{developers.length ? (
				developers.map(dev => <Developer key={dev.login.uuid} devInfo={dev} procedure={procedure} setSelectedDevs={setSelectedDevs} setDevelopers={setDevelopers} />)
			) : (
				<Link to="/hire/select-date">
					<Button>FIRST SELECT WORK PERIOD</Button>
				</Link>
			)}
		</DevelopersPreview>
	);
};

export default ListDevelopers;
