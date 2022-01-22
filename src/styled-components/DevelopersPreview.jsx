import styled from 'styled-components';
const ContactsPreview = styled.ul`
	margin: 2%;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	& button {
		width: 96vw;
		margin-top: 30vh;
	}
	& .hire-btn {
		margin-top: 2rem;
	}
	@media all and (max-width: 925px) {
		justify-content: center;
	}
`;

export default ContactsPreview;
