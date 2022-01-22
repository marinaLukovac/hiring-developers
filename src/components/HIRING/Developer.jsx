import DevStyled from '../../styled-components/DevStyled';
// import Button from '../../styled-components/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Developer = ({ devInfo, procedure, setSelectedDevs }) => {
	const [checked, setChecked] = useState(false);
	const linkedInLink = `https://www.linkedin.com/in/${devInfo.name.first.toLowerCase()}-${devInfo.name.last.toLowerCase()}`;
	const devId = devInfo.login.uuid;

	let path = '';
	if (procedure === 'hire-single') {
		path = '/hire/confirm';
	} else if (procedure === '/hire/select-developer') {
		path = '';
	} else if (procedure === 'manage') {
		path = `/manage/${devId}`;
	}
	useEffect(() => {
		if (checked) {
			setSelectedDevs(prev => {
				let temp = [...prev];
				temp.push(devId);
				return temp;
			});
		} else {
			setSelectedDevs(prev => (prev.length === 0 ? [] : prev.filter(selectedId => selectedId !== devId)));
		}
	}, [checked, devId, setSelectedDevs]);
	const selectDevHandler = e => {
		setChecked(prev => !prev);
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
				<Link className="links" to={path}></Link>
				<div>
					<label htmlFor="select-dev" />
					<input type="checkbox" value={devInfo} checked={checked} id="select-dev" onChange={selectDevHandler} />
				</div>
			</div>
			{/* <div className="delete-edit">
				<Button>X</Button>
				<Button>EDIT</Button>
				<Button>HIRE</Button>
			</div> */}
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
