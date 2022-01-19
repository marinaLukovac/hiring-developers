import styled from 'styled-components';

const NavigationStyled = styled.nav`
	position: fixed;
	top: 0;
	z-index: +1;
	width: 100vw;
	background-color: #f5f5f5;
	box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 3px 0px, rgba(0, 0, 0, 0.2) 10px 2px 2px 2px;
	padding: 1vh 0;
	display: flex;
	justify-content: space-between;
	height: 7vh;
	& input {
		padding: 0.5vh 2vh;
		font-size: 2.5vh;
		font-weight: 200;
		border: 0.2vh solid #808080;
		border-radius: 0.4vh;
		color: #a54758;
		background: #f5f5f5;
		margin: 0 1vh;
		align-self: stretch;
		width: 100%;
	}
	& input:focus {
		background: #fff;
		border: 0.3vh solid #a54758;
		outline: none;
	}
	& input:hover {
		background: #fff;
		border: 0.3vh solid #a54758;
	}
	& button {
		height: 100%;
		margin: 0 1vh;
		padding: 0 3.5vh;
	}
`;

export default NavigationStyled;
