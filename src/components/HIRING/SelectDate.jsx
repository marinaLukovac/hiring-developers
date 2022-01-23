import { useEffect, useState } from 'react';
import { checkIfDateIsOk } from '../../isDevAvailable';
import SelectDateStyled from '../../styled-components/SelectDateStyled';

const SelectDate = ({ setSelectedDate }) => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [message, setMessage] = useState('');
	const min = new Date().toISOString().slice(0, 10);
	const endMin = startDate ? new Date().toISOString().slice(0, 10) : min;
	useEffect(() => {
		if (startDate && endDate) {
			const dateIsOk = checkIfDateIsOk(startDate, endDate);
			setMessage(dateIsOk[1]);
			if (dateIsOk[0]) {
				setSelectedDate({ start: startDate, end: endDate });
			}
		}
	}, [startDate, endDate, setMessage, setSelectedDate]);
	console.log(message);
	return (
		<>
			<SelectDateStyled>
				<div>
					<label htmlFor="start-date">From:</label>
					<input type="date" id="start-date" max={endDate && endDate} min={min} onChange={e => setStartDate(new Date(e.target.value).getTime())} />
				</div>
				<div>
					<label htmlFor="end-date">To:</label>
					<input type="date" id="end-date" min={endMin} onChange={e => setEndDate(new Date(e.target.value).getTime())} />
				</div>
				{<article>{message}</article>}
			</SelectDateStyled>
		</>
	);
};

export default SelectDate;
