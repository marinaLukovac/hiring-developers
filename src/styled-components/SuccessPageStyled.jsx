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
		overflow-wrap: normal;
		text-align: center;
	}
	& button {
		height: 8rem;
		width: 18rem;
	}
	@media all and (max-width: 1100px) and (max-height: 700px) {
		& h2 {
			font-size: 2.5rem;
		}
		& button {
			height: 5rem;
			width: 12rem;
		}
	}
	@media all and (max-width: 550px) {
		height: 80vh;
		width: 80vw;
		margin-top: 10vh;
		& button {
			height: 10rem;
			width: 15rem;
		}
	}
	@media all and (max-width: 420px) {
		& button {
			height: 10rem;
			width: 15rem;
		}
	}
		& button {
			height: 10rem;
			width: 20rem;
		}
	}
`;
export default SuccessPageStyled;
