import { Link } from 'react-router-dom';
import Button from '../styled-components/Button';
import WelcomeStyled from '../styled-components/WelcomeStyled';

const Welcome = ({ setProcedure }) => {
	return (
		<WelcomeStyled>
			<h1>PRIME HIRING</h1>
			<Link to="/hire/select-date">
				<Button onClick={() => setProcedure('hire-single')}>HIRE A DEVELOPER NOW</Button>
			</Link>
			<Link to="/hire/select-date">
				<Button onClick={() => setProcedure('hire-multiple')}>HIRE A TEAM</Button>
			</Link>
			<Link to="/manage/all">
				<Button onClick={() => setProcedure('/manage/all')}>MANAGE DEVELOPERS</Button>
			</Link>
		</WelcomeStyled>
	);
};

export default Welcome;
