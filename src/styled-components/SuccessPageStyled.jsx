import styled from 'styled-components';

const SuccessPageStyled = styled.article`
	height: 60vh;
	width: 80vw;
	margin: 20vh auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	border-radius: 1rem;
	${'' /* background-color: #d8e9b2;
	background-color: #f8c4cb; */}
	border: 0.3rem solid #ccc;
	& h2 {
		color: #808080;
		font-size: 3rem;
		font-weight: 300;
	}
	& button {
		height: 3rem;
	}
`;
export default SuccessPageStyled;
