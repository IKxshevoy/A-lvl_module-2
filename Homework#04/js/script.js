// 1) Даний об'єкт з містами та країнами. Вивести масив значення в якому будуть рядки перетворені на цей формат: <Столиця> - це <Країна>.
const capitals = {
    'Kyiv' : 'Ukraine',
    'Athens' : 'Greece',
    'Lisbon' : 'Portugal',
    'Reykjavik' : 'Iceland',
    'Rome' : 'Italy',
}

const countries = Object.entries(capitals);
countries.forEach(([key, value]) => {
  console.log(key + ' is ' + value);
});

// 2) Створити функцію яка виведе багатовимірний масив A. Даний масив містить список інших масивів B. Масиви B повинні містити по 3 значення. Та вивести його максимальне значення
const arrayA = [[3,5,7],[6,1,54],[-3,0,12]];

function findMax(array) {
    let max = arrayA[0][0];
    for (let i of arrayA) {
        for (let j of i) {
            if (j > max) {
                max = j;
            }
        }
    }
    console.log(max);
}

findMax(arrayA);

// 3) Створити об'єкт із назвами днів тижня. Де ключами будуть uk і en, a значенням властивості uk буде масив із назвами днів тижня українською, а en - англійською. Після написати функцію яка буде виводити в консоль назву дня тижня, користуючись вище створеним об'єктом. Усі дні тижня починаються з 1 і закінчуються цифрою 7 (1- понеділок, 7 - неділя). Функція отримує змінну lang – назву мови дня тижня та змінну day – число дня тижня.

const days = {
    ukr : ['Понеділок', 'Вівторок', 'Середа', 'Четверг', 'П\'ятниця', 'Субота', 'Неділя'],
    eng : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getDay(lang, dayNumber) {
    let number = dayNumber - 1;
    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
        console.log('day number must be in range of 1 to 7');
        return 0;
    }

    if (days.hasOwnProperty(lang)) {
        console.log(days[lang][number]);
        return 0;
    }

    console.log('Unknown language, use ukr or eng options instead');
    return 0;
}

getDay('ukr', 5);

// 4) Створіть функцію, яка повертає суму двох найменших позитивних чисел із масиву мінімум 4 позитивних цілих чисел. Не передаються числа з плаваючою комою або непозитивні цілі числа.

const numbers = [11.3, 3, 23, 43, 1, 23.1, 0, -2, -12, 4.2, -21, 4];

function findSum(array) {
    let arr = [];
    while(arr.length < 2) {
        let temp = array[0];
        let index = 0;
        for(let i = 0; i < array.length; i++) {
            if(!Number.isInteger(array[i]) || array[i] < 1) {
                continue;
            }
            if(array[i] < temp) {
                temp = array[i];
                index = i;
            }
        }
        arr.push(temp);
        array.splice(index,1);
    }

    const add = arr => arr.reduce((a, b) => a + b, 0);
    let sum = add(arr);
    console.log(sum);
}

findSum(numbers);

// 5) Даний масив одиниць і нулів, перетворіть еквівалентне двійкове значення ціле число.
// Наприклад: [0, 0, 0, 1] розглядається як 0001 двійкове уявлення 1.

const binary = ['1','0','1','1','0','1','1','0'];

function transform (array) {
    let number = 0;
    for(let i = 0; i < array.length; i++) {
        number+= +array[i] * Math.pow(2,array.length - i - 1);
    }
    console.log(number);
}

transform(binary);