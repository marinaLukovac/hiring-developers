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
	//<current>,<object: start and endinging time>,<array of previous hiring times>

	if (old.length === 0) return true;
	for (let i = 0; i < old.length; i++) {
		// i-1]<--c.start--[old.start--old.ending]--c.
		let previous = null;
		old[i - 1] ? (previous = old[i - 1].ending) : (previous = now);
		//starting part,
		console.log(now / 10000000, previous / 10000000, old[i].starting / 10000000, old[i].ending / 10000000, contract.starting / 10000000, contract.ending / 10000000);
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
