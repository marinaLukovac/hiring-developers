import Developer from './Developer';
import DevelopersPreview from '../styled-components/DevelopersPreview';

const ListDevelopers = ({ developers }) => {
	return <DevelopersPreview>{developers && developers.map(dev => <Developer key={dev.login.uuid} devInfo={dev} />)}</DevelopersPreview>;
};

export default ListDevelopers;
