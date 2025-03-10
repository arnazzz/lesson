// Function Declaration (Объявленная функция)
// Объявленная функция — это стандартный способ создания функции в JavaScript. 
// Она записывается с ключевым словом function, а затем указывается имя функции.
// Функции, объявленные с помощью function, поднимаются (hoisting) в коде. 
// Это значит, что их можно вызывать до объявления.
function greet(name) {
    return `Привет, ${name}!`;
}

console.log(greet("Алихан")); // "Привет, Алихан!"

// Function Expression (Функциональное выражение)
// Функциональное выражение — это способ создания функции, при котором она присваивается переменной. 
// В отличие от Function Declaration, такую функцию нельзя вызвать до ее объявления.
const farewell = function(name) {
    return `До свидания, ${name}!`;
};

console.log(farewell("Алихан")); // "До свидания, Алихан!"

// Стрелочная функция (Arrow Function)
// Стрелочные функции – это краткий способ записи обычных функций, появившийся в стандарте.
// Они используются для упрощения кода, особенно при работе с колбэками и функциональным программированием.
const sayHello = (name) => `Здравствуй, ${name}!`;

console.log(sayHello("Алихан")); // "Здравствуй, Алихан!"

// Разница в hoisting (поднятии)
try {
    console.log(sum(2, 3)); // Работает, потому что Function Declaration поднимается
} catch (error) {
    console.log("Ошибка:", error.message);
}

function sum(a, b) {
    return a + b;
}

try {
    console.log(multiply(2, 3)); // Ошибка: Cannot access 'multiply' before initialization
} catch (error) {
    console.log("Ошибка:", error.message);
}

// Function Expression объявляется после вызова → будет ошибка
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(2, 3)); // 6








// -----------------------------------------------------------------------------------------------------
// 1. map() – Создает новый массив, применяя функцию к каждому элементу
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num ** 2);
console.log(squared); // [1, 4, 9, 16]

// 2. forEach() – Выполняет действие для каждого элемента (без создания нового массива)
numbers.forEach(num => console.log(num * 2));
// Вывод: 2, 4, 6, 8

// 3. filter() – Создает новый массив из элементов, прошедших проверку
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// 4. reduce() – Сворачивает массив в одно значение
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

// 5. find() – Возвращает первый элемент, прошедший проверку
const users = [{ id: 1, name: "Алихан" }, { id: 2, name: "Иван" }];
const user = users.find(user => user.id === 2);
console.log(user); // { id: 2, name: "Иван" }

// 6. findIndex() – Возвращает индекс первого элемента, прошедшего проверку
const index = numbers.findIndex(num => num > 2);
console.log(index); // 2 (первый элемент больше 2 – это 3)

// 7. some() – Проверяет, есть ли хотя бы один элемент, удовлетворяющий условию
const hasLargeNumber = numbers.some(num => num > 3);
console.log(hasLargeNumber); // true

// 8. every() – Проверяет, соответствуют ли все элементы условию
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // false

// 9. sort() – Сортирует массив (изменяет его!)
const unsortedNumbers = [10, 2, 30, 1];
unsortedNumbers.sort((a, b) => a - b);
console.log(unsortedNumbers); // [1, 2, 10, 30]

// 10. reverse() – Переворачивает массив (изменяет его!)
const letters = ["a", "b", "c"];
letters.reverse();
console.log(letters); // ["c", "b", "a"]

// 11. flat() – Разворачивает вложенные массивы
const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArray.flat(2)); // [1, 2, 3, 4, 5, 6]

// 12. join() – Объединяет элементы массива в строку
const words = ["Hello", "world"];
console.log(words.join(" ")); // "Hello world"
