import styled from 'styled-components';
const ContactPreview = styled.li`
	position: relative;
	padding: 2vh;
	margin-top: 2vh;
	display: flex;
	flex-direction: column;
	text-align: left;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;
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
	& .edit-box {
		display: flex;
		justify-content: start;
		align-items: end;
	}
	& .edit-box button {
		margin-right: 2vh;
	}
	& .delete-edit {
		height: 30%;
		width: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		visibility: hidden;
		position: absolute;
		right: 2vh;
		top: 2vh;
	}
	& .delete-edit button {
		margin-bottom: 2vh;
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
	&:hover h3,
	&:hover .delete-edit {
		color: #a54758;
		transition: background-color 0.3s ease-in;
		transition: color 0.3s ease-in;
		visibility: visible;
	}
`;

export default ContactPreview;
