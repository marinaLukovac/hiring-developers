import DevStyled from '../styled-components/DevStyled';
import Button from '../styled-components/Button';
const Developer = ({ devInfo }) => {
	return (
		<DevStyled>
			<div
				className="picture-frame"
				style={{
					backgroundImage: `url("${devInfo.picture.large}")`,
				}}
			></div>
			<div className="contact-info">
				<h3>
					{devInfo.name.first} {devInfo.name.last}
				</h3>
				{/* <div className="edit-box"> */}
				<p>Tech: {devInfo.technology}</p>
				<p>Hourly rate: ${devInfo.pricePH}</p>
				{/* </div> */}
			</div>
			<div className="location">
				<p>
					{devInfo.location.street.name} {devInfo.location.street.number}
				</p>
				<p>{devInfo.location.city}</p>
				<p>{devInfo.location.country}</p>
			</div>
			<div className="delete-edit">
				<Button>&#8659;</Button>

				<Button>&#8659;</Button>
			</div>
		</DevStyled>
	);
};

export default Developer;
