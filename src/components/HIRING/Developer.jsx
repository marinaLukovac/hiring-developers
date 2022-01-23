import DevStyled from '../../styled-components/DevStyled';
import { useEffect, useState } from 'react';
import Button from '../../styled-components/Button';
import { useNavigate } from 'react-router-dom';

const Developer = ({ devInfo, procedure, setSelectedDevs }) => {
	if (setSelectedDevs) {
	} else {
		setSelectedDevs = () => {};
	}
	const [checked, setChecked] = useState(false);
	const linkedInLink = `https://www.linkedin.com/in/${devInfo.name.first.toLowerCase()}-${devInfo.name.last.toLowerCase()}`;
	const devId = devInfo.login.uuid;
	const history = useNavigate();

	useEffect(() => {
		if (procedure === 'manage') {
			return;
		}
		if (checked) {
			if (procedure === 'single') {
				setSelectedDevs([devId]);
			} else {
				setSelectedDevs(prev => {
					let temp = [...prev];
					temp.push(devId);
					return temp;
				});
			}
		} else {
			setSelectedDevs(prev => (prev.length === 0 ? [] : prev.filter(selectedId => selectedId !== devId)));
		}
	}, [checked, devId, setSelectedDevs, procedure]);
	const selectDevHandler = e => {
		setChecked(prev => !prev);
	};
	const redirectToEditPage = () => {
		history(`edit/${devId}`);
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

				{procedure !== 'manage' && <input type={procedure === 'single' ? 'radio' : 'checkbox'} name="select-dev" id={devId} checked={checked} onChange={selectDevHandler} />}
				{procedure === 'manage' && (
					<Button className="delete-btn" onClick={redirectToEditPage}>
						EDIT
					</Button>
				)}
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
