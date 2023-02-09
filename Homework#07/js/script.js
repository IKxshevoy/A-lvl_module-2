//Сделайте цикл с confirm, который продолжается по Отмена и заканчивается по ОК.
function confirmation() {
  while(!confirm("Press ok to close the window")) {}
}
console.log(confirmation());

//Создайте пустой массив и добавляйте в него элементы, введенные пользователем, пока пользователь не нажмет Отмена в очередном prompt. Используйте push для удобства: push В массиве не должно быть null после работы цикла;
function arrayFill(){
  const arr = [];
  let elem;
  while (elem = prompt("Input any symbol")) {
    arr.push(elem);
  }
  return arr;
}
console.log(arrayFill());

//Сделайте предыдущее задание, не используя push, а обращаясь к элементам по индексу.
function noPush () {
  const arr = [];
  let elem;
  while (elem = prompt("Input any symbol")) {
    arr[arr.length] = elem;
  }
  return arr;
}
console.log(noPush());

//Создайте бесконечный цикл, который прерывается с помощью конструкции break, когда Math.random() > 0.9. Код должен подсчитывать количество итераций и вывести это число с помощью alert.
function infinity () {
  let i = 0;
  for(;;i++){
    if(Math.random() > 0.9) break;
  }
  return ++i;
}
alert(infinity());

//Сделайте цикл с prompt, который прерывается по нажатию OK и продолжается по нажатию "Отмена" c пустым телом цикла.
function emptyBody() {
  while(prompt("Push ok to close the prompt") === null) {}
}
emptyBody();

//Подсчитать сумму арифметической прогрессии от 1 до N c шагом 3 (1,4,7....) используя цикл for. Метод Гаусса не применять, наоборот, сделать максимально наивное решение.
function progressionSum(n) {
  let sum = 1;
  for(let i =1; i<n; i++) {
    sum += 1 + 3*i;
  }
  return sum;
}
console.log(progressionSum(53));

//Сформировать строку " # # # # # " с помощью цикла for. Длина строки может быть четной и нечетной, и указывается в одном месте в коде.
function chessOneLine() {
  const amount  = prompt("Input the amount of #");
  let str = "";
  for(let i = 0; i < amount; i++) {
    str+=" # ";
  }
  return str;
}
console.log(chessOneLine());

//Сформировать строку c помощью вложенных циклов. Для перевода строки используйте \n.
function numbers () {
  const amount = prompt("input amount of lines");
  let str = "";
  for(let i = 0; i< amount; i++) {
    for(let j = 0; j<=9; j++) {
      str+=j;
    }
    str+="\n";
  }
  return str;
}
console.log(numbers());

//Сформируйте строку с шахматной доской из вложенных циклов. Для перевода строки используйте \n. Код должен поддерживать легкое изменение размеров доски.
function chess() {
  const width = prompt("Input the width of board");
  const height = prompt("Input the height of board");
  let result = "";
  let str = "";
  for(let i = 0; i < height; i++) {
    for(let j = 0; j<width; j++) {
      if(j % 2 === 0) {
        str+="#";
      }
      else { 
        str+= ".";
      }
    }
    if(i % 2 === 0) {
      str = [...str].reverse().join("");
    }
    result+= str + "\n";
    str = "";
  }
  return result;
}
console.log(chess());

//Сформируйте массив из N элементов, содержащий в себе кубы индексов, т. е:
function cubes() {
  const elements = prompt ("input amount of elements in array");
  const arr = [];
  for(let i = 0; i < elements; i++) {
    arr.push(Math.pow(i,3));
  }
  return arr;
}
console.log(cubes());

//C помощью вложенного цикла сформируйте массив массивов "таблица умножения". Для инициализации вложенных массивов используйте
function multiplyTable () {
  let arr = Array(10);
  for (let i = 1; i < 10; i++) {
    arr[i] = [...Array(10)].map((_,j) => i * j);
  }
  console.log(arr[5][6]);
  return arr;
}
console.log(multiplyTable());

//Напишите функцию readArrayOfObjects, которая циклически добавляет в массив объекты, которые ввел пользователь. Пользователь вводит ключи и значения (их в каждом объекте может быть любое количество), используя prompt. Когда пользователь нажимает "Отмена" в окне prompt, ввод объекта заканчивается и объект добавляется в массив. Перед вводом следующего объекта пользователю задается вопрос (используя confirm), хочет ли он продолжить это мучение ввод объектов. При утвердительном ответе, опять работает ввод любюго количества ключей для создания нового объекта
//Функция должна возвращать созданный массив с объектами.

function readArrayOfObjects(){
  const arr = [];
  let flag = true;
  let elem;
  let temp;
  while (flag) {
  const obj = {};
  let counter = 1;
    while (elem = prompt()) {
        if(counter % 2 !== 0) {
          temp = elem;
          obj[elem] = "";
          counter++;
        }
        else {
        obj[temp] = elem;
        counter++;
        }
      }
    arr.push(obj);
    flag = confirm("do you want to add some more objects?");
  }
  return arr;
}
console.log(readArrayOfObjects());

/*Перепишите пример ниже, используя if.
let color = prompt("Введите цвет","");
switch (color){
    case "red": document.write("<div style='background-color: red;'>красный</div>");
    case "black": document.write("<div style='background-color: black; color: white;'>черный</div>");
                break;
    case "blue": document.write("<div style='background-color: blue;'>синий</div>");
    case "green": document.write("<div style='background-color: green;'>зеленый</div>");
                break;
    default: document.write("<div style='background-color: gray;'>Я не понял</div>");
}
*/

function colorChange() {
  const color  = prompt("Input color");
  if(color === "red") {
    document.write("<div style='background-color: red;'>красный</div>");
    document.write("<div style='background-color: black; color: white;'>черный</div>");
  }
  else if(color === "black") {
    document.write("<div style='background-color: black; color: white;'>черный</div>");
  }
  else if(color === "blue") {
    document.write("<div style='background-color: blue;'>синий</div>");
    document.write("<div style='background-color: green;'>зеленый</div>");
  }
  else if(color === "green") {
    document.write("<div style='background-color: green;'>зеленый</div>");
  }
  else {
    document.write("<div style='background-color: gray;'>Я не понял</div>");
  }
}
colorChange();


//Напишите функцию noSwitch, которая принимает объект со значениями-функциями, ключ для объекта и запускает одну из функций из объекта если ключ найден, иначе - запускает default:
const noSwitch = (key, cases, defaultKey='default') => {
  //проверка наличия key в cases
  //если есть - достать значение по ключу. это будет функция. Запустить ее
  //если нет - извлечь из объекта cases значение по ключу, имя которого лежит в переменной defaultKey. Запустить 
  //пущай функция noSWitch возвращает то, что возвращает одна из функций из объекта
  if(cases.hasOwnProperty(key)) {
    return cases[key]();
  }
  else {
    return cases[defaultKey]();
  }
}

const drink = prompt("Что вы любите пить")
noSwitch(drink, {
  воду: () =>  console.log('Самый здоровый выбор!'),
  чай(){ 
      console.log('Вкусная и полезная штука. Не переусердствуйте с сахаром')
  },
  "пиво": () => console.log('Хорошо летом, да в меру'),
  виски: function(){
      console.log('Да вы, батенька, эстет! Не забудьте лед и сигару')
  },
  default(){
      console.log('шото я не понял')
  }
})