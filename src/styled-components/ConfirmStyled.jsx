import styled from 'styled-components';

const ConfirmStyled = styled.section`
	display: flex;
	flex-direction: column;
	margin: 2%;
	& a {
		text-align: center;
		margin: 10vh auto;
		font-weight: 500;
		font-size: 1rem;
		color: #808080;
		padding: 2rem;
	}
	& h3:hover,
	& a:hover {
		background-color: #a54758;
		text-decoration: underline;
		text-underline-offset: 0.9rem;
		color: #fff;
	}
`;
export default ConfirmStyled;
