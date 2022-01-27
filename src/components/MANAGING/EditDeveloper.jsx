import { useParams, useNavigate } from 'react-router-dom';
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
	const [hiringPeriods, setHiringPeriods] = useState([]);
	const params = useParams();
	const history = useNavigate();

	useEffect(() => {
		if (params.devId !== 'new') {
			if (!id) {
				let devInfo = developers.find(dev => dev.id === params.devId);
				setFirstName(devInfo.firstName);
				setLastName(devInfo.lastName);
				setCity(devInfo.location);
				setPicture(devInfo.picture);
				setTechnology(devInfo.technology);
				setPricePH(devInfo.pricePH);
				setYoExperience(devInfo.yoExperience);
				setLanguage(devInfo.language);
				setLinkedIn(devInfo.linkedIn);
				setPhone(devInfo.phone);
				setEmail(devInfo.email);
				setId(devInfo.id);
				setHiringPeriods(devInfo.hiringPeriods);
			}
		}
	}, [developers, id, params.devId, setFirstName, setLastName, setCity, setPicture, setTechnology, setPricePH, setYoExperience, setLanguage, setLinkedIn, setPhone, setEmail, setId]);

	const formSubmitHandler = async e => {
		e.preventDefault();
		let idFromParams = '';
		let periods = [];
		let method = () => {};
		if (params.devId === 'new') {
			idFromParams = uuid4();
			method = postDeveloper;
		} else {
			idFromParams = params.devId;
			method = putDeveloper;
			periods = hiringPeriods;
		}
		let developer = {
			firstName: firstName,
			lastName: lastName,
			location: city,
			picture: picture,
			technology: technology,
			pricePH: pricePH,
			yoExperience: yoExperience,
			language: language,
			linkedIn: linkedIn,
			phone: phone,
			email: email,
			id: idFromParams,
			hiringPeriods: periods,
		};
		const response = await method(developer, idFromParams).then(res => res);

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
		setDevelopers([]);
		setHiringPeriods([]);
		//set redirection to the new page depending on response
		e.target.reset();
		if (response.statusText === 'Created') {
			history('/success/created');
		} else if (response.statusText === 'OK') {
			history('/success/updated');
		} else {
			history('/success/false');
		}
	};

	return (
		<EditForm method="post" encType="multipart/form-data" onSubmit={formSubmitHandler}>
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
				<label htmlFor="tech-select" defaultValue={''}>
					Select technology:{' '}
				</label>
				<select
					name="tech"
					id="tech-select"
					value={technology}
					onChange={e => {
						setTechnology(e.target.value);
					}}
				>
					<option value="" disabled>
						*Select an option*
					</option>
					<option value="Java">Java</option>
					<option value="Javascript">Javascript</option>
					<option value=".NET">.NET</option>
					<option value="Flutter">Flutter</option>
					<option value="Python">Python</option>
					<option value="PHP">PHP</option>
				</select>
			</div>
			<div>
				<label htmlFor="pph">Price per Hour:</label>
				<input className="input-field" type="number" name="pph" id="pph" required value={pricePH} onInput={e => setPricePH(e.target.value)} />
			</div>
			<div>
				<label htmlFor="yoe">Years of experience:</label>
				<input className="input-field" type="number" name="yoe" id="yoe" required value={yoExperience} onInput={e => setYoExperience(e.target.value)} />
			</div>
			<div>
				<label htmlFor="lang">Language:</label>
				<input className="input-field" type="text" name="lang" id="lang" required value={language} onInput={e => setLanguage(e.target.value)} />
			</div>
			<div>
				<label htmlFor="linked">LinkedIn:</label>
				<input className="input-field" type="text" name="linked" id="linked" value={linkedIn} onInput={e => setLinkedIn(e.target.value)} />
			</div>
			<div>
				<label htmlFor="phone">Phone:</label>
				<input className="input-field" type="text" name="phone" id="phone" required value={phone} onInput={e => setPhone(e.target.value)} />
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input className="input-field" type="text" name="email" id="email" required value={email} onInput={e => setEmail(e.target.value)} />
			</div>

			<input className="input-field" type="submit" value={params.devId === 'new' ? 'CREATE CONTACT' : 'UPDATE CONTACT'} />
		</EditForm>
	);
};

export default EditDeveloper;
