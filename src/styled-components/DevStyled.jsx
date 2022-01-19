import styled from 'styled-components';
const ContactPreview = styled.li`
	position: relative;
	padding: 1vh 2vw;
	height: 16vh;
	margin-top: 1.5vh;
	display: flex;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;
	& .picture-frame {
		width: 14vh;
		height: 14vh;
		border-radius: 50%;
		background-position: center;
		background-size: cover;
		margin-right: 2vw;
	}
	& .contact-info {
		display: flex;
		flex-direction: column;
		height: 14vh;
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
	& .location {
		align-self: bottom;
		position: absolute;
		bottom: 1.5vh;
		left: 60vw;
	}
	& .delete-edit {
		height: 14vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		visibility: hidden;
		position: absolute;
		right: 2vw;
		top: 2vh;
	}
	& h3 {
		color: #808080;
		font-size: 3vh;
		font-weight: 500;
	}
	& p {
		color: #707070;
		font-size: 2vh;
		font-weight: 200;
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
