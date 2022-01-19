import styled from 'styled-components';

const EditForm = styled.form`
	height: 60vh;
	width: 90vw;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1.5vh;
	margin: 23vh auto;
	& .input-field {
		padding: 2vh;
		border-radius: 0.4vh;
		border: 0.2vh solid #808080;
		color: #808080;
		background: #f5f5f5;
		margin-bottom: 1.5vh;
	}
	& .input-field:hover,
	& .input-field:focus {
		background: #fff;
		border-color: #a54758;
		outline: none;
	}
	& div {
		display: flex;
		flex-direction: column;
	}

	& .input-field[type='submit']:hover {
		background-color: #a54758;
		color: #fff;
		border-color: #fff;
		font-style: bold;
		font-weight: 500;
	}
`;
export default EditForm;
