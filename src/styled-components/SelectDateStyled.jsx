import styled from 'styled-components';

const SelectDateStyled = styled.main`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	margin: 10vh auto;
	width: 80vw;
	@media all and (max-width: 550px) {
		flex-direction: column;
		justify-content: space-evenly;
		margin: 3vh auto;
		height: 50vh;
		font-size: 0.8rem;
		& div {
			width: 70vw;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
	& input[type='date'] {
		-webkit-align-items: center;
		display: -webkit-inline-flex;
		font-family: 'Poppins';
		margin-left: 2vh;
		overflow: visible;
		padding: 0 4vh;
		-webkit-padding-start: 1px;
	}

	& input::-webkit-datetime-edit {
		-webkit-flex: 1;
		-webkit-user-modify: read-only !important;
		display: inline-block;
		min-width: 0;
		overflow: visible;
	}

	& input::-webkit-datetime-edit-fields-wrapper {
		-webkit-user-modify: read-only !important;
		display: inline-block;
		padding: 1vh 2vh;
		white-space: pre;
	}
	& article {
		width: 96vw;
		text-align: center;
		margin-top: 20vh;
		color: red;
	}
`;
export default SelectDateStyled;
