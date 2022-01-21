import DevStyled from '../styled-components/DevStyled';
import Button from '../styled-components/Button';
const Developer = ({ devInfo }) => {
	const linkedInLink = `https://www.linkedin.com/in/${devInfo.name.first.toLowerCase()}-${devInfo.name.last.toLowerCase()}`;
	return (
		<DevStyled>
			<div
				className="picture-frame"
				style={{
					backgroundImage: `url("${devInfo.picture.large}")`,
				}}
			></div>
			<div className="delete-edit">
				<Button>X</Button>
				<Button>EDIT</Button>
				<Button>HIRE</Button>
			</div>
			<div className="contact-info">
				<h3>
					{devInfo.name.first} {devInfo.name.last}
				</h3>
				{/* <div className="edit-box"> */}
				<p>From: {devInfo.location.city}</p>
				<p>Tech: {devInfo.technology}</p>
				<p>
					Hourly rate: <span>${devInfo.pricePH}</span>
				</p>
				<p>
					Experience: {devInfo.yoExperience}
					{devInfo.yoExperience > 1 ? 'years' : 'year'}
				</p>
				<p>Language: {devInfo.language}</p>
				<a href={linkedInLink}>LinkedIn</a>
				<p>
					Phone: <a href={`tel:${devInfo.phone}`}>{devInfo.phone}</a>
				</p>
				<p>
					<a href={`email:${devInfo.email}`}>{devInfo.email}</a>
				</p>
				{/* </div> */}
			</div>
		</DevStyled>
	);
};

export default Developer;
