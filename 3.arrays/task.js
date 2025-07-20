function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((element, index) => element === arr2[index]);
}


function getUsersNamesInAgeRange(users, gender) {
	let result = users.filter(user => user.gender === gender);
	if (result.length === 0) return 0;
	return result
		.map(user => user.age)
		.reduce((sum, age) => sum + age, 0) / result.length;
}