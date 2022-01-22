import styled from 'styled-components';
const ContactPreview = styled.li`
	position: relative;
	padding: 1.5rem;
	margin: 0.5rem auto;
	display: flex;
	flex-direction: column;
	text-align: left;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;
	width: 19%;
	font-size: 1rem;
	@media all and (max-width: 1100px) {
		width: 25%;
		justify-content: center;
	}
	@media all and (max-width: 420px) {
		width: 100%;
	}
	& span {
		font-weight: 400;
		color: #888888;
	}
	& a {
		font-weight: 400;
		font-size: 10px;
		color: #00629e;
	}
	& a:hover {
		color: #a54758;
	}
	& .picture-frame {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		background-position: center;
		background-size: cover;
		margin-right: 2vw;
		align-self: center;
	}
	& .contact-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-right: 7vh;
		width: 80%;
	}
	& .picture-checkbox {
		display: flex;
		justify-content: space-between;
		align-items: top;
	}

	& .delete-btn {
		margin: 0;
		padding: 0.1rem;
		width: 3rem;
	}
	& input[type='checkbox'] {
		width: 1rem;
		height: 1rem;
	}

	& h3 {
		color: #808080;
		font-size: 1.3rem;
		font-weight: 500;
		white-space: nowrap;
	}
	& p {
		color: #707070;
		font-size: 0.8rem;
		font-weight: 300;
	}
	&:hover {
		background-color: #fff;
	}

	&:hover p,
	&:hover h3 {
		color: #a54758;
		transition: background-color 0.3s ease-in;
		transition: color 0.3s ease-in;
		visibility: visible;
	}
	& .links {
		text-decoration: none;
	}
`;

export default ContactPreview;
