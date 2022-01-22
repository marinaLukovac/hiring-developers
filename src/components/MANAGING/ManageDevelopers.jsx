import { Link } from 'react-router-dom';
import Button from '../../styled-components/Button';

const ManageDevelopers = () => {
	return (
		<>
			<Link to="/hiring-developers">
				<Button>&#9750;</Button>
			</Link>
			ManageDevelopers
		</>
	);
};

export default ManageDevelopers;
