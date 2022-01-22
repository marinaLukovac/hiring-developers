import { useParams } from 'react-router-dom';
import EditForm from '../../styled-components/EditForm';

const EditDeveloper = ({ developers, setDevelopers }) => {
	const id = useParams();
	const dev = developers.find(dev => dev.login.uuid === id);
	return (
		<EditForm>
			<input value={dev.name.first} />
		</EditForm>
	);
};

export default EditDeveloper;
