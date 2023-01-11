// 1) Створити цикл на 10 ітерацій. На кожній ітерації якщо i парне, то вивести в консоль слово Fiz, якщо i не парне, то вивести в консоль слово Buz, якщо i кротну цифру 3, то вивести FizBuz.
console.log("Task#1");
for (let i = 1; i <= 10; i++) {

    if(i%3 === 0) {
        console.log("FizBuz");
    }
    else {
        if (i%2 !== 0) {
            console.log("Buz");
        }
        else {
            console.log("Fiz");
        }
    }
}

// 2) Написати логіку знаходження факторіалу числа 10.
let factorial = 1;
for (let i = 1; i <= 10; i++) {
    factorial *= i;
}
console.log("Task#2, 10! = " +factorial);

// 3) У пачці паперу 500 аркушів. За тиждень в офісі витрачається 1200 аркушів. Яку найменшу кількість пачок потрібно купити в офіс на 8 тижнів?
let weekAmount = 1200;
let packAmount = 500;
let weeks = 8;
let neededPackages = Math.ceil(weekAmount*weeks/packAmount);
console.log("Task#3, you will need " + neededPackages + " packages");

// 4) Створити функцію, яка виведе у консоль номер поверху та номер під'їзду за номером квартири. Поверхів у нас 9, квартир на поверсі по 3
function getFloorNumber(flatNumber) {
    if (isNaN(flatNumber) || flatNumber<1) {
        console.log("Task#4, Invalid flat number, make sure you input a number bigger than 0");
        return 0;
    }
    let entranceNumber = Math.ceil(flatNumber/27);
    floorNumber = flatNumber;
    while(floorNumber > 27) {
        floorNumber -=27;
    }
    floorNumber = Math.ceil(floorNumber/3);
    console.log("Task#4, The floor number of flat " + flatNumber + " is " + floorNumber + " The entrance number is " + entranceNumber);
}
getFloorNumber("30");

// 5) Вивести у консоль піраміду. Змінна вказує кількість рядків, з яких побудується піраміда. Піраміда повинна будуватися в однаковому візуальному вигляді між собою, але строго враховуючи кількість рядків
function drawPyramide(rows) {
    if (isNaN(rows)) {
        console.log("Task#5, impossible to draw, not a number")
        return 0;
    }
    let counter = 1;
    while(counter <= rows) {
        let row = '';
        for(let i = 0; i<=rows-counter; i++) {
            row+= ' ';
        }
        for(let i = 0; i<counter*2; i++) {
            row+= '△';
        }
        console.log(row);
        counter++;
    }
}

drawPyramide(10);