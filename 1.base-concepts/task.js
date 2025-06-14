"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;

	if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}
	if (d === 0) {
		arr.push(-b / (2 * a));
	} else {
		arr;
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let loanBody = amount - contribution;
	let monthPercent = percent / (12 * 100);

	let monthPayment = loanBody * (monthPercent + (monthPercent / (Math.pow((1 + monthPercent), countMonths) - 1)));
	let result = monthPayment * countMonths;
	return +result.toFixed(2);
}
