// ==============================
// ЗАДАЧИ ПО ОБЪЕКТАМ
// ==============================

// 1. Создай объект Person с полями: name, age, city. Выведи все поля в консоль.

const person = {
    name: 'Arnaz',
    age: 27,
    city: 'Atyrau'
}

console.log(person);



// 2. Увеличь возраст на 1 и добавь новое поле isWorking: true

person.age += 1;

person.isWorking = true;

console.log(person);



// 3. Удали поле city из объекта

delete person.city;

console.log(person);



// 4. Проверь, есть ли поле "age" в объекте

console.log('age' in person);



// 5. Перебери все ключи и значения объекта в цикле

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}



// Дан массив объектов
const users = [
    { name: "Alihan", age: 25 },
    { name: "Dina", age: 17 },
    { name: "Ivan", age: 30 }
];

// 6. Выведи всех пользователей старше 18 лет

for (let i = 0; i < users.length; i++) {
    console.log(users[i].age > 18 ? `${users[i].name} больше 18` : ` ${users[i].name} меньше 18`);
}

const checkAge = users.filter(user => user.age > 18)

console.log(checkAge);



// 7. Напиши функцию getUserNames(users), которая возвращает массив имён из массива объектов


// через FOR
function getUserNames(users) {
    const namesArr = [];
    for (let i = 0; i < users.length; i++) {
        namesArr.push(users[i].name);
    }
    return namesArr;
}
console.log(getUserNames(users));



// через MAP
function getNamesWithMap(users) {
    return users.map(user => user.name)
}

const newArrNames = getNamesWithMap(users)

console.log(newArrNames);


// 8. Создай объект student со вложенным объектом address. Выведи адрес студента в формате "Город, Улица"

const student = {
    address: {
        city: 'Atyrau',
        street: 'Bereke'
    }
}

console.log(` ${student.address.city}, ${student.address.street}`);



// 9. Создай функцию getAverageAge(users), которая возвращает средний возраст пользователей

function getAverageAge(users) {
    const ageSum = users.reduce((acc, user) => acc + user.age, 0);
    return ageSum / users.length;
}

getAverageAge(users)



// 10. Напиши функцию addUser(users, newUser), которая добавляет нового пользователя, если такого имени ещё нет

// const users = [
//     { name: "Alihan", age: 25 },
//     { name: "Dina", age: 17 },
//     { name: "Ivan", age: 30 }
// ];

function addUser(users, newUser) {
    if (!newUser.name) return 'name - не найдено!';
    if (!users.some(user => user.name === newUser.name)) {
        users.push(newUser);
        return 'Добавлено';
    }
    return 'Не найдено';
}


// ==============================
// ЗАДАЧИ ПО СТРОКАМ
// ==============================

const testStr = "  JavaScript is Awesome!  ";

// 1. Удали пробелы по краям строки и переведи в верхний регистр

console.log(testStr.trim().toUpperCase())

// 2. Проверь, содержит ли строка слово "Awesome"

console.log(testStr.includes('Scri'));

console.log(testStr.toLowerCase().includes('scri'));


// 3. Замени "JavaScript" на "JS" и выведи результат

console.log(testStr.replace('Javascript', 'JS'));


// 4. Раздели строку на массив по пробелам

console.log(testStr.split(','));


// 5. Выведи первые 10 символов строки

console.log(testStr.slice(0, 10));


const text = "  JavaScript is a powerful and flexible language!  ";

// 6. Приведи строку к нижнему регистру и разбей на слова

console.log(text.toLowerCase().trim().split(' '));

const textArr = text.toLowerCase().trim().split(' ')


// 7. Подсчитай количество слов в строке




// 8. Напиши функцию countLetter(str, letter), которая возвращает, сколько раз буква встречается в строке


function countLetter (str, letter) {
    let counter = 0;
    for (let char of str.toLowerCase()) {
        if (char === letter.toLowerCase()) {
            counter++;
        }
        
    }
    return counter;
}

countLetter('Arnaz', 'a')


// 9. Напиши функцию isPalindrome(str), которая проверяет, является ли строка палиндромом

function isPalindrome(str) {
    return str == str.split('').reverse().join('');
}

isPalindrome('kazak')


// 10. Напиши функцию capitalizeWords(str), которая делает заглавными первые буквы всех слов

function capitalizeWords(str) {
    let toArr = str.split(' ');
    let toArrMap = toArr.map(arr => arr[0].toUpperCase() + arr.slice(1));
    return toArrMap.join(' ');
}

capitalizeWords('')

function capitalizeWords(str) {
    let toArr = str.trim().replace(/\s+/g, ' ').split(' ');
    let toArrMap = toArr.map(arr => arr[0].toUpperCase() + arr.slice(1));
    return str;
}

capitalizeWords('   adasd as das das   asd as')


function capitalizeWords(str) {
    return str
        .trim()
        .replace(/\s+/g, ' ')
        .split(' ')
        .map(arr => arr[0].toUpperCase() + arr.slice(1))
        .join(' ');
}

capitalizeWords('   adasd as das das   asd as')