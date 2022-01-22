import Button from '../../styled-components/Button';
import DevStyled from '../../styled-components/DevStyled';

const SelectedDev = ({ devInfo, setSelectedDevs }) => {
	const devId = devInfo.login.uuid;
	const removeSelection = () => {
		setSelectedDevs(prev => {
			let temp = [...prev];
			return temp.filter(el => devId !== el);
		});
	};
	return (
		<DevStyled>
			<div className="picture-checkbox">
				<div
					className="picture-frame"
					style={{
						backgroundImage: `url("${devInfo.picture.large}")`,
					}}
				></div>

				<Button className="delete-btn" onClick={removeSelection}>
					X
				</Button>
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

export default SelectedDev;
