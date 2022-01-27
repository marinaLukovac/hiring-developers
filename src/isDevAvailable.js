const checkIfDateIsOk = (startDate, endDate) => {
	const current = Date.now();
	if (startDate >= endDate) {
		return [false, 'Hiring start should be before end!'];
	} else if (current >= startDate) {
		return [false, 'Hiring time cannot be in the past'];
	}
	return [true, ''];
};

const checkDevAvailability = (now, contract, old) => {
	if (old.length === 0) return true;
	for (let i = 0; i < old.length; i++) {
		let previous = null;
		old[i - 1] ? (previous = old[i - 1].ending) : (previous = now);

		if (previous < contract.starting && old[i].starting > contract.starting && old[i].starting < contract.ending) {
			return false;
		} else if ((old[i].starting <= contract.starting && old[i].ending >= contract.starting) || (old[i].starting <= contract.ending && old[i].ending >= contract.ending)) {
			return false;
		}
	}
	return true;
};

const formatToBeautifulDate = date => {
	return new Date(date).toUTCString().slice(5, 17);
};

export { checkIfDateIsOk, checkDevAvailability, formatToBeautifulDate };
