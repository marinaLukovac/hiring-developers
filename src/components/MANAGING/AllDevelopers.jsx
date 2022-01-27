import DevelopersPreview from '../../styled-components/DevelopersPreview';
import Developer from '../HIRING/Developer';

const AllDevelopers = ({ developers, procedure, setDevelopers }) => {
	return (
		<DevelopersPreview>
			{developers.length && developers.map(dev => <Developer key={dev.id} devInfo={dev} procedure={procedure} setDevelopers={setDevelopers} />)}
			{/* <Routes>
					<Route path=":devId" element={<EditDeveloper developers={developers} setDevelopers={setDevelopers} />} />
				</Routes> */}
		</DevelopersPreview>
	);
};

export default AllDevelopers;
