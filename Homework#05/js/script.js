// 1. Напишіть функцію avg, яка повертає середнє значення переданого масиву (якщо довжина масиву дорівнює нулю, то має повернутися 0).

function avg(array) {
    if (array.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum+=array[i];
    }
    return sum/array.length;
}
console.log(avg([22, 34, 62, 99]));
// console.log(avg([22, 34, 62, 99])); // 54.25

//------------------------

// 2. Напишіть функцію power для обчислення степені числа

function power (a, b){
    return Math.pow(a,b);
}

console.log(power(3, 4));
// console.log(power(3, 4)); // 81

//------------------------

// 3. Напишіть функцію squareDigits, яка приймає число та зводить у квадрат кожен символ.

function squareDigits(num){
    let numbers = Array.from(num.toString());
    let str = '';
    for(let i=0; i<numbers.length; i++) {
      str+= Math.pow(numbers[i],2);
    }
    return Number(str);
  }
  console.log(squareDigits(867));
//     console.log(squareDigits(867)); // 643649


//------------------------

// 4. Напишіть функцію isPalindrome, яка перевіряє, чи переданий рядок є паліндромом.
// Паліндром - це слово, фраза чи послідовність, які читаються так само як уперед, назад, наприклад, level.

function isPalindrome(str) {
    let arr = Array.from(str);
    for(let i = 0; i < Math.floor(arr.length/2); i++) {
        if(arr[i] === arr[arr.length - i - 1]) continue;
        else return false;
    }
    return true;
}
console.log(isPalindrome('level'));
console.log(isPalindrome('ротатор'));
// console.log(isPalindrome('level')); // true
// console.log(isPalindrome('ротатор')); // true


//------------------------

// 5. Написати функцію stringTransformer, яка буде трансформувати рядок за такими правилами:

// 1) Змінити регістр кожного знака, тобто. нижній регістр у верхній регістр, верхній регістр у нижній регістр. (наприклад 'FizzBuzz'-> 'fIZZbUZZ');
// 2) Змінити порядок слів на зворотний (наприклад, 'pen pineapple apple PEN' --> 'pen APPLE PINEAPPLE PEN'). // Done

function stringTransformer(s) {
    let array =  Array.from(s);
    let output = [];
    let str = '';
    for(let i=0; i<array.length; i++) {
        if(array[i].toLowerCase() === array[i]) {
            str+=array[i].toUpperCase();
        }
        else {
            str+=array[i].toLowerCase();
        }
    }
    array = [];
    array = str.split("");
    str = '';
    for(let i=0; i<=array.length; i++) {
        if(array[i] === ' ' || i === array.length) { 
            output.push(str);
            str = '';
        }
        else {
            str+=array[i];
        }
    }
    output.reverse();
    for(let i=0; i<output.length; i++) {
        str+=output[i] + ' ';
    }
    let finalString = str.slice(0,-1);
    return finalString;
}
console.log(stringTransformer('torininGEN THE bEst'));
// BeST the TORININgen
console.log(stringTransformer('JavaScript IS cool LANGUAGE'))
// language COOL is jAVAsCRIPT



//------------------------

// 6. Реалізувати функцію, яка виконуватиме математичні операції з введеними користувачем числами


// Взяти за допомогою модального вікна браузера два числа. ( функцією )
function getNumbers(firstNumber, secondNumber) {
    let arr = [];
    do {
    firstNumber = prompt("Input first number");        // Після введення даних додати перевірку їхньої коректності.
    secondNumber = prompt("Input second number");     // Якщо користувач не ввів числа, або при введенні вказав не числа - запитати обидва числа заново
    }
    while(isNaN(firstNumber) || firstNumber === '' || isNaN(secondNumber) || secondNumber === '');
    arr.push(firstNumber);
    arr.push(secondNumber);
    return arr;
}

// Взяти за допомогою модального вікна браузера математичну операцію, яку потрібно здійснити. Сюди можна ввести +, -, *, /. ( функцією )
function getOperation(operation) {
    do {
    operation = prompt("Input the operation symbol you want to select");              // Якщо користувач вві неправильний символ - запитати ще раз
    }
    while(operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/');
    return operation;
}

// Створити функцію, в якій провести запит чисел, мат. операції та виконати обчислення )
// Вивести у консоль результат виконання функції.

function calculate() {
    let numbers = getNumbers();
    let operation = getOperation();
    switch (operation) {
        case '+':
            console.log(+numbers[0] + +numbers[1]);
            break;
        case '-':
            console.log(numbers[0] - numbers[1]);
            break;
        case '/':
            console.log(numbers[0] / numbers[1]);
            break;
        case '*':
            console.log(numbers[0] * numbers[1]);
        default: "An error occurred";
            break;
    }
}

let result = calculate();
