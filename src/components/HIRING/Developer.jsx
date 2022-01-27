import DevStyled from '../../styled-components/DevStyled';
import { useEffect, useState } from 'react';
import Button from '../../styled-components/Button';
import { useNavigate } from 'react-router-dom';
import { deleteDeveloper } from '../../service';

const Developer = ({ devInfo, procedure, setSelectedDevs, setDevelopers }) => {
	if (setSelectedDevs) {
	} else {
		setSelectedDevs = () => {};
	}
	const [checked, setChecked] = useState(false);
	const devId = devInfo.id;
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
		history(`${devId}`);
	};
	const delDev = async () => {
		const response = await deleteDeveloper(devInfo.id);
		if (response.statusText === 'OK') {
			console.log('deleted');
		} else {
			console.log('something went wrong');
		}
		setDevelopers([]);
	};
	return (
		<DevStyled>
			<div className="picture-checkbox">
				<div
					className="picture-frame"
					style={{
						backgroundImage: `url("${devInfo.picture}")`,
					}}
				></div>

				{procedure && procedure !== 'manage' && <input type={procedure} name="select-dev" id={devId} checked={checked} onChange={selectDevHandler} />}
				{procedure === 'manage' && (
					<div className="btn-box">
						<Button className="delete-btn" onClick={redirectToEditPage}>
							EDIT
						</Button>
						<Button className="delete-btn" onClick={delDev}>
							X
						</Button>
					</div>
				)}
			</div>

			<div className="contact-info">
				<h3>
					{devInfo.firstName} {devInfo.lastName}
				</h3>
				{/* <div className="edit-box"> */}
				<p>From: {devInfo.location}</p>
				<p>Tech: {devInfo.technology}</p>
				<p>
					Hourly rate: <span>${devInfo.pricePH}</span>
				</p>
				<p>
					Experience: {devInfo.yoExperience}
					{devInfo.yoExperience > 1 ? 'years' : 'year'}
				</p>
				<p>Language: {devInfo.language}</p>
				<a href={devId.linkedIn}>LinkedIn</a>
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
