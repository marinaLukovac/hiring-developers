import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EditForm from '../../styled-components/EditForm';
import { v4 as uuid4 } from 'uuid';
import { postDeveloper, putDeveloper } from '../../service.js';

const EditDeveloper = ({ developers, setDevelopers }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [city, setCity] = useState('');
	const [picture, setPicture] = useState('');
	const [technology, setTechnology] = useState('');
	const [pricePH, setPricePH] = useState('');
	const [yoExperience, setYoExperience] = useState('');
	const [language, setLanguage] = useState('');
	const [linkedIn, setLinkedIn] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [id, setId] = useState('');
	const params = useParams();

	useEffect(() => {
		if (params.devId !== 'new') {
			if (!id) {
				let devInfo = developers.find(dev => dev.login.uuid === params.devId);
				console.log(devInfo);
				setFirstName(devInfo.name.first);
				setLastName(devInfo.name.last);
				setCity(devInfo.location.city);
				setPicture(devInfo.picture.large);
				setTechnology(devInfo.technology);
				setPricePH(devInfo.pricePH);
				setYoExperience(devInfo.yoExperience);
				setLanguage(devInfo.language);
				setLinkedIn(`https://www.linkedin.com/in/${devInfo.name.first.toLowerCase()}-${devInfo.name.last.toLowerCase()}`);
				setPhone(devInfo.phone);
				setEmail(devInfo.email);
				setId(devInfo.login.uuid);
			}
		}
	}, [developers, id, params.devId, setFirstName, setLastName, setCity, setPicture, setTechnology, setPricePH, setYoExperience, setLanguage, setLinkedIn, setPhone, setEmail, setId]);

	const post = e => {
		e.preventDefault();
		let devId = id ? id : uuid4();
		let developer = { name: { first: firstName, last: lastName }, location: { city: city }, picture: { large: picture }, technology: technology, pricePH: pricePH, yoExperience: yoExperience, language: language, linkedIn: linkedIn, phone: phone, email: email, login: { uuid: devId } };
		console.log(developer);
		setFirstName('');
		setLastName('');
		setCity('');
		setPicture('');
		setTechnology('');
		setPricePH('');
		setYoExperience('');
		setLanguage('');
		setLinkedIn('');
		setPhone('');
		setEmail('');
		params.devId === 'new' ? postDeveloper(developer) : putDeveloper(developer);
		e.target.reset();
	};

	return (
		<EditForm method="post" encType="multipart/form-data" onSubmit={post}>
			<div>
				<label htmlFor="firstName">First Name</label>
				<input className="input-field" type="text" name="firstName" id="firstName" placeholder="e.g. John" required value={firstName} onInput={e => setFirstName(e.target.value)} />
			</div>
			<div>
				<label htmlFor="lastName">Last Name</label>
				<input className="input-field" type="text" name="lastName" id="lastName" placeholder="e.g. Smith" required value={lastName} onInput={e => setLastName(e.target.value)} />
			</div>

			<div>
				<label htmlFor="city">City</label>
				<input className="input-field" type="text" name="city" id="city" placeholder="New York" required value={city} onInput={e => setCity(e.target.value)} />
			</div>

			<div>
				<label htmlFor="photo">Add Photo</label>
				<input className="input-field" type="txt" name="image" id="photo" required value={picture} onInput={e => setPicture(e.target.value)} />
			</div>
			<div>
				<label htmlFor="tech">Add Photo</label>
				<input className="input-field" type="text" name="tech" id="tech" required value={technology} onInput={e => setTechnology(e.target.value)} />
			</div>
			<div>
				<label htmlFor="pph">Price per Hour:</label>
				<input className="input-field" type="text" name="pph" id="pph" required value={pricePH} onInput={e => setPricePH(e.target.value)} />
			</div>
			<div>
				<label htmlFor="yoe">Years of experience:</label>
				<input className="input-field" type="text" name="yoe" id="yoe" required value={yoExperience} onInput={e => setYoExperience(e.target.value)} />
			</div>
			<div>
				<label htmlFor="lang">Language:</label>
				<input className="input-field" type="text" name="lang" id="lang" required value={language} onInput={e => setLanguage(e.target.value)} />
			</div>
			<div>
				<label htmlFor="linked">LinkedIn:</label>
				<input className="input-field" type="text" name="linked" id="linked" required value={linkedIn} onInput={e => setLinkedIn(e.target.value)} />
			</div>
			<div>
				<label htmlFor="phone">Phone:</label>
				<input className="input-field" type="text" name="phone" id="phone" required value={phone} onInput={e => setPhone(e.target.value)} />
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input className="input-field" type="text" name="email" id="email" required value={email} onInput={e => setEmail(e.target.value)} />
			</div>

			<input className="input-field" type="submit" value="UPDATE CONTACT" />
		</EditForm>
	);
};

export default EditDeveloper;
