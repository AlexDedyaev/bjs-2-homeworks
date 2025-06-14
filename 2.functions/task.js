// Задача 1: 
function getArrayParams(...arr) {
	let min = Infinity; // Минимальное значение
	let max = -Infinity; // Максимальное значение
	let sum = 0; // Сумма элементов

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) { // Если текущий элемент больше текущего максимума
			max = arr[i]; // Устанавливаем новый максимум
		}
		if (arr[i] < min) { // Если текущий элемент меньше текущего минимума
			min = arr[i]; // Устанавливаем новый минимум
		}
		sum += arr[i]; // Суммируем элементы
	}

	const avg = +(sum / arr.length).toFixed(2); // Среднее значение, округленное до 2-х знаков
	return {
		max: max,
		min: min,
		avg: avg
	}; // Возвращаем объект с результатами
}

// Тесты для getArrayParams
console.log(getArrayParams(-99, 99, 10)); // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10)); // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5)); // { min: 5, max: 5, avg: 5 }

// Задача 2: 

// Насадка 1: Суммирование элементов массива
function summElementsWorker(...arr) {
	if (arr.length === 0) return 0; // Если массив пустой, возвращаем 0
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]; // Просуммируем все элементы
	}
	return sum; // Возвращаем сумму
}

// Насадка 2: Разница между максимальным и минимальным значениями
function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0; // Если массив пустой, возвращаем 0
	let max = arr[0]; // Начинаем с первого элемента
	let min = arr[0]; // Начинаем с первого элемента
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) max = arr[i]; // Если текущий элемент больше текущего максимума
		if (arr[i] < min) min = arr[i]; // Если текущий элемент меньше текущего минимума
	}
	return max - min; // Возвращаем разницу между максимальным и минимальным значениями
}

// Насадка 3: Разница между суммой четных и нечетных элементов
function differenceEvenOddWorker(...arr) {
	if (!arr.length) return 0; // Если массив пустой, возвращаем 0
	let sumEvenElement = 0; // Сумма четных элементов
	let sumOddElement = 0; // Сумма нечетных элементов
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) { // Если элемент четный
			sumEvenElement += arr[i]; // Добавляем к сумме четных
		} else { // Иначе элемент нечетный
			sumOddElement += arr[i]; // Добавляем к сумме нечетных
		}
	}
	return sumEvenElement - sumOddElement; // Возвращаем разницу
}

// Насадка 4: Среднее значение четных элементов
function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0; // Если массив пустой, возвращаем 0
	let sumEvenElement = 0; // Сумма четных элементов
	let countEvenElement = 0; // Количество четных элементов
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) { // Если элемент четный
			sumEvenElement += arr[i]; // Добавляем к сумме четных
			countEvenElement++; // Увеличиваем счетчик четных элементов
		}
	}
	if (countEvenElement === 0) return 0; // Если четных элементов нет, возвращаем 0
	return sumEvenElement / countEvenElement; // Возвращаем среднее значение четных элементов
}

// Тесты для насадок
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 10

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // -269

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 38

// Задача 3:

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity; // Можем начать с минимального возможного значения
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]); // Применяем указанную функцию к каждому массиву
		if (result > maxWorkerResult) { // Если результат больше текущего максимума
			maxWorkerResult = result; // Меняем максимум
		}
	}
	return maxWorkerResult; // Возвращаем наилучший результат
}

// Тесты для функции агрегатора
const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];

console.log(makeWork(arr, summElementsWorker)); // 328
console.log(makeWork(arr, differenceMaxMinWorker)); // 86
console.log(makeWork(arr, differenceEvenOddWorker)); // 92
console.log(makeWork(arr, averageEvenElementsWorker)); // 72
