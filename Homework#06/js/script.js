//1
//Створити функцію, яка буде видаляти людей з масиву за індексом, який ми передамо параметром.
const arr = ['Vasya', 'Petya', 'Alexey']

function removeUser(arr, index) {
    let newArr = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if(index === i) {
            continue;
        }
        newArr[j++] = arr[i];
    }
    return newArr;
}

console.log(removeUser(arr, 1)); /// ['Vasya', 'Alexey']

//2
//Створити функцію яка поверне всі ключі об'єкта, переданого параметром
const obj = { name: 'Vasya', age: 1}

function getAllKeys(obj) {
    let arr = [];
    for (let key in obj) {
        arr.push(key);
    }

    return arr;
}
console.log(getAllKeys(obj))  /// ["name", "age"]


//3
//Створити функцію, яка поверне всі значення об'єкта переданого параметром
function getAllValues(obj) {
    let arr = [];
    for (let key in obj) {
        arr.push(obj[key]);
    }
    return arr;
}
console.log(getAllValues(obj)); /// ["Vasya", 1]


//4
//Створити функцію, де ми першим параметром передамо об'єкт з новим кандидатом, а другим параметром - id будь-якого кондидата в масиві condidateArr. Функція повинна буде вставити кандидата переданого через перший параметр до масиву перед кондидатом у якого id одно тому що передали у другому параметрі
const firstObj = {
    id: 3,
    name: 'Vasya',
}

const secondObj = {
    id: 4,
    name: 'Katya',
}

const array = [
    {
        id: 1,
        name: 'Kolya',
    },
    {
        id: 2,
        name: 'Petya',
    },
];

function insertIntoarr(obj, id) {
    for(let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            array.splice(i, 0, obj);
            return array;
        }
    }
}

insertIntoarr(firstObj, 2);
console.log(array);
/// [ {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]

insertIntoarr(secondObj, 1);
console.log(array); 
/// [ {id: 4,name: 'Katya'}, {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]


