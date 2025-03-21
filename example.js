// ОБЪЕКТЫ и работа с ними
// Объекты — это набор пар "ключ-значение", применяются для хранения структурированной информации.

const user = {
    name: "Arnaz",
    age: 25,
    isStudent: false
};


// Основные действия:

// Доступ к полю	
user.name;
user["name"];

// Изменение значения	
user.age = 26;

// Добавление нового поля	
user.city = "Almaty";

// Удаление поля	
delete user.isStudent;

// Проверка существования	
// "name" in user
console.log("name" in user);

// Перебор полей	
for (let key in user) console.log(key);


// --------------------------------------------------------------------------------------------
// РАБОТА СО СТРОКАМИ
// Строка — это последовательность символов

const message = "Hello, JavaScript!";


// Полезные методы:

// Длина строки
console.log(message.length);

// Преобразует в ВЕРХНИЙ РЕГИСТР
console.log(message.toUpperCase());

// В нижний регистр
console.log(message.toLowerCase());

// Проверяет, содержит ли подстроку
console.log(message.includes("Java"));

// Начинается ли строка с подстроки
console.log(message.startsWith("Hello"));

// Заканчивается ли строка на подстроку
console.log(message.endsWith("!"));

// Извлекает часть строки
console.log(message.slice(0, 5));

// Заменяет подстроку
console.log(message.replace("JavaScript", "World"));

// Делит строку на массив
console.log(message.split(", "));

// Удаляет пробелы в начале/конце
console.log(" Arnaz  ".trim());
