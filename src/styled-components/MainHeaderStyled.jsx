import styled from 'styled-components';

const MainHeaderStyled = styled.header`
	padding: 2vw 2%;
	font-size: 1.8rem;
	display: flex;
	flex-direction: column;

	@media all and (max-width: 700px) {
		font-size: 2.5rem;
	}
	@media all and (max-width: 550px) {
		font-size: 1.5rem;
	}
	@media all and (max-width: 420px) {
		font-size: 1.2rem;
	}
	@media all and (max-width: 420px) and (max-height: 700px) {
		font-size: 2rem;
	}
	@media all and (max-width: 400px) {
		font-size: 2rem;
	}
	& ul {
		list-style: none;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	& .links,
	ul li {
		text-decoration: none;
		color: #808080;
	}
	& .links:hover,
	.active {
		text-decoration: underline;
		text-underline-offset: 0.9rem;
		color: #a54758;
	}
	& section {
		display: flex;
		justify-content: space-between;
		font-size: 1.2rem;
	}
	& article {
		color: #a54758;
	}
`;
export default MainHeaderStyled;
