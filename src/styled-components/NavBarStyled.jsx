import styled from 'styled-components';

const NavBarStyled = styled.nav`
	box-sizing: border-box;
	width: 100vw;
	padding: 1.5vh 10vh;
	font-size: 3vh;
	& ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		list-style: none;
	}
	& .active {
		color: #a54758;
	}
	& .links {
		text-decoration: none;
		color: #808080;
	}
`;
export default NavBarStyled;
