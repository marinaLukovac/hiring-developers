/*//going to be timestamps...

const hiringPeriods = [
	{ start: 1, end: 3 },
	{ start: 5, end: 10 },
	{ start: 16, end: 20 },
	{ start: 24, end: 27 },
	{ start: 35, end: 38 },
	{ start: 100, end: 200 },
];

//cases:
//1. out of range T
const newContract1 = {
	start: 11,
	end: 12,
	message: '',
};
//2. starting point is within the range of periods F
const newContract2 = {
	start: 9,
	end: 12,
	message: '',
};
//3. ending point is within a range F
const newContract3 = {
	start: 11,
	end: 17,
	message: '',
};
//4. both points are within the range F
const newContract4 = {
	start: 17,
	end: 19,
	message: '',
};
//5. bpth points are within the free range but their interval does contain endpoints
const newContract5 = {
	start: 99,
	end: 202,
	message: '',
};
//6
const newContract6 = {
	start: 99,
	end: 202,
	message: '',
};
//needs to be a for + if combo /
//additional: needs to be in the future, so the starting point is now (that should be the first range check)
//nowValue can be both within and outside the range
//but it doesn't matter if logic is fine...
// const nowValueIn = 15;
// const nowValueOut = 16;

//1st validate if start is smaller then end
//2nd validate if start is larger or equal than now(as now take days count...)
//3rd check if both times lie within a free range

const nowValue = 5;

console.log(checkDevAvailability(nowValue, newContract1, hiringPeriods));
console.log(checkDevAvailability(nowValue, newContract2, hiringPeriods));
console.log(checkDevAvailability(nowValue, newContract3, hiringPeriods));
console.log(checkDevAvailability(nowValue, newContract4, hiringPeriods));
console.log(checkDevAvailability(nowValue, newContract5, hiringPeriods));
console.log(checkDevAvailability(nowValue, newContract6, hiringPeriods));
*/
const checkIfDateIsOk = (startDate, endDate) => {
	const current = Date.now();
	if (startDate >= endDate) {
		return 'Hiring start should be before end!';
	} else if (current >= startDate) {
		return 'Hiring time cannot be in the past';
	}
	return true;
};
const checkDevAvailability = (now, contract, old) => {
	//<current>,<object: start and end time>,<array of previous hiring times>

	for (let i = 0; i < old.length; i++) {
		// i-1]<--c.start--[old.start--old.end]--c.
		let previous = null;
		old[i - 1] ? (previous = old[i - 1].end) : (previous = now);

		if (previous < contract.start && old[i].start > contract.start && old[i].end < contract.end) {
			return false;
		} else if ((old[i].start <= contract.start && old[i].end >= contract.start) || (old[i].start <= contract.end && old[i].end >= contract.end)) {
			return false;
		}
	}
	return true;
};

const formatToBeautifulDate = date => {
	return new Date(date).toUTCString().slice(5, 17);
};

export { checkIfDateIsOk, checkDevAvailability, formatToBeautifulDate };
