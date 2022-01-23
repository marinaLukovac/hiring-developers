import styled from 'styled-components';

const WelcomeStyled = styled.article`
	margin: 15vh auto;
	height: 60vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	font-size: 1.5rem;
	& button {
		width: 50rem;
		height: 8vh;
	}
	@media all and (max-width: 540px) {
		& button {
			width: 94vw;
		}
	}
	& h1 {
		margin-bottom: 1rem;
		font-size: 4rem;
		font-weight: 500;
		color: #a54758;
	}
`;
export default WelcomeStyled;
