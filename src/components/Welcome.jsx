import { Link } from 'react-router-dom';
import WelcomeStyled from '../styled-components/WelcomeStyled';
import Button from '../styled-components/Button';

const Welcome = ({ setProcedure }) => {
	return (
		<WelcomeStyled>
			<h1>PRIME HIRING</h1>
			<Link to="/hire/select-date">
				<Button onClick={() => setProcedure('radio')}>HIRE A DEVELOPER NOW</Button>
			</Link>
			<Link to="/hire/select-date">
				<Button onClick={() => setProcedure('checkbox')}>HIRE A TEAM</Button>
			</Link>
			<Link to="/manage/all">
				<Button onClick={() => setProcedure('manage')}>MANAGE DEVELOPERS</Button>
			</Link>
		</WelcomeStyled>
	);
};

export default Welcome;
