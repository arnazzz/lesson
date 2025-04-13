// Деструктуризация — это способ «распаковать» значения из массива или 
// свойства из объекта в отдельные переменные.

const user = {
    name: "Айбек",
    age: 25
};

// Вместо:
const name = user.name;
const age = user.age;

// Можно так:
const { name, age } = user;


// Деструктуризация массивов
const fruits = ["яблоко", "банан", "груша"];

const [first, second] = fruits;
console.log(first);  
console.log(second); 

// Пропуск элементов:
const [ , , third] = fruits;
console.log(third); 

// Значения по умолчанию:
const [a, b, c = "нет"] = ["x", "y"];
console.log(c);

// Rest-оператор (...)
// Rest собирает оставшиеся значения в массив или объект.
// Пример с массивом:
const [first, ...rest] = [1, 2, 3, 4];
console.log(rest); 

// Пример с объектом:
const { name, ...others } = { name: "Али", age: 30, city: "Шымкент" };
console.log(others);

// Spread-оператор (...)
// Spread — это «разворачивание» значений массива или объекта.
// Массивы:
const a = [1, 2];
const b = [3, 4];
const all = [...a, ...b];
console.log(all);

// Объекты:
const user1 = { name: "Диас", age: 20 };
const user2 = { ...user1, city: "Астана" };
console.log(user2); 

// ----------------------------------------------------------------------------------------------------------

// Модули в JavaScript
// Модули позволяют разделить код на части — каждый файл может быть отдельной 
// логической единицей с переменными, функциями или классами.

// Зачем нужны модули?
// 1 Упрощают поддержку кода
// 2 Повышают читаемость
// 3 Позволяют переиспользовать код
// 4 Обеспечивают изоляцию переменных

// Примеры приведены в файлах main.js, math.js

// ----------------------------------------------------------------------------------------------------------

// Обработка ошибок: try, catch, finally

// Зачем нужна?
// Код может ошибаться:
// 1 запрос к серверу не сработал
// 2 файл не найден
// 3 переменная не определена и т.д.

try {
    // код, который может вызвать ошибку
    const result = riskyFunction();
    console.log(result);
} catch (error) {
    // обработка ошибки
    console.error("Произошла ошибка:", error.message);
} finally {
    // выполняется всегда
    console.log("Завершение блока try/catch");
}
  

function divide(a, b) {
    if (b === 0) {
        throw new Error("Нельзя делить на ноль");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch (err) {
    console.warn("Ошибка:", err.message);
}

// finally используется, чтобы освободить ресурсы, даже если была ошибка

try {
    openFile();
    readData();
} catch (e) {
    console.error(e);
} finally {
    closeFile(); // выполняется всегда
}
  