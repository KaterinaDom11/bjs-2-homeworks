"use strict";

function solveEquation(a, b, c) {
	let arr = [];

	const D = b ** 2 - 4 * a * c;

	if (D < 0) {
		return arr;
	} else if (D === 0) {
		const x = -b / (2 * a);
		arr.push(x);
	} else {
		const sqrtD = Math.sqrt(D);
		const x1 = (-b + sqrtD) / (2 * a);
		const x2 = (-b - sqrtD) / (2 * a);
		arr.push(x1, x2);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const monthlyPercent = (percent / 100) / 12;
	const principal = amount - contribution;

	if (principal <= 0) {
		return 0;
	}

	const monthlyPayment = principal * (monthlyPercent + (monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1)));
	const totalPayment = monthlyPayment * countMonths;

	return Number(totalPayment.toFixed(2));

}