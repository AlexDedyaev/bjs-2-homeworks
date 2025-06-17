function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((value, index) => value === arr2[index])
}



function getUsersNamesInAgeRange(users, gender) {

	if (users.length === 0) {
		return 0;
	}

	let result = users.filter(users => users.gender === gender)
		.map(users => users.age)
		.reduce((accumulator, currentValue, i, arr) => {
			accumulator += currentValue;
			if (i === arr.length - 1) {
				return accumulator / arr.length;
			}
			return accumulator;
		}, 0);
	return result
}