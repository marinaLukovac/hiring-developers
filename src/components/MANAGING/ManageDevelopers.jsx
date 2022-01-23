import { Link } from 'react-router-dom';
import Button from '../../styled-components/Button';
import DevelopersPreview from '../../styled-components/DevelopersPreview';
import Developer from '../HIRING/Developer';
// import EditDeveloper from './EditDeveloper';

const ManageDevelopers = ({ developers, setDevelopers, procedure }) => {
	return (
		<DevelopersPreview>
			<Link to="/hiring-developers">
				<Button className="home-btn">&#9750;</Button>
			</Link>
			<Link to="/manage/edit/new">
				<Button className="home-btn">&#9750;</Button>
			</Link>
			{developers.length && developers.map(dev => <Developer key={`managed${dev.login.uuid}`} devInfo={dev} procedure={procedure} />)}
			{/* <Routes>
				<Route path="edit/devId" element={<EditDeveloper developers={developers} setDevelopers={setDevelopers} procedure={procedure} />} />
			</Routes> */}
		</DevelopersPreview>
	);
};

export default ManageDevelopers;
