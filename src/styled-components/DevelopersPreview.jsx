import styled from 'styled-components';
const ContactsPreview = styled.ul`
	margin: 5% 2%;
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
	& .home-btn{
		max-width: 20vw;
		margin: 0;
	}
	}
	@media all and (max-width: 925px) {
	margin: 18% 2%;
		justify-content: center;
		& button{

		font-size: .8rem;
		}
	& .home-btn{
		max-width: 30vw;
	}
	}
`;

export default ContactsPreview;
