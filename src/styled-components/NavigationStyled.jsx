import styled from 'styled-components';

const NavigationStyled = styled.nav`
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0;
	z-index: +1;
	background-color: #f5f5f5;
	box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 3px 0px, rgba(0, 0, 0, 0.2) 10px 2px 2px 2px;
	padding: 0.2rem 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 8vh;
	& button {
		height: 80%;
		margin: 0;
	}
`;

export default NavigationStyled;
