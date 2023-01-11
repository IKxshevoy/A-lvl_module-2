// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.
let weight = 80;
let height = 1.8;

let bmi = weight/Math.pow(height,2);
console.log(bmi);

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. Значення змінної value.
const value = 46.7;
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value));

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM.
let time = 450;
let hours = Math.floor(time/60);
let minutes = time % 60;
if (hours) {
	if (hours < 10) hours = '0' + hours;
	if (minutes < 10) minutes = '0' + minutes;
	time = hours + ':' + minutes;
} else {
	time = time;
}
console.log(time);

/* 
 * Вивести на екран модальне вікно prompt з повідомленням "Enter the number".
 * Результат виконання модального вікна записати в змінну, значення якої вивести в консоль.
 * */
let userNumber = prompt('Enter the number');
console.log(userNumber);

/* 
   * За допомогою модального вікна prompt отримати від користувача два числа.
   * Вивести в консоль суму, різницю, добуток, поділ та залишок від поділу їх один на одного.
   * */
let firstNumber = parseInt(prompt('Enter the 1st number'));
let secondNumber = parseInt(prompt('Enter the 2nd number'));
console.log(firstNumber + secondNumber, Math.abs(firstNumber - secondNumber), firstNumber / secondNumber, firstNumber % secondNumber);