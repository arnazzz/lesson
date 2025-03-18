// 1. Задание:
// Создай функцию getSquare(num), используя Function Declaration.
// Попробуй вызвать её до и после объявления.
// Функция должна возвращать квадрат числа.

console.log('before: ', getSquare(5));

function getSquare(num) {
  return num * num
}

console.log('after: ', getSquare(5));



// 2. Задание:
// Создай функцию subtract(a, b), используя Function Expression.
// Попробуй вызвать её до объявления – должна быть ошибка.
// После объявления вызови ещё раз – функция должна корректно отработать.

console.log('before:', subtract(10, 5));

let subtract = function(a, b) {
  return a - b;
}

console.log('after:', subtract(10, 5));


// 3. Задание:
// Создай две функции divide и divideArrow, используя Function Expression и Arrow Function.
// Обе функции должны делить первое число на второе.

let divide = function(a, b) {
  return a / b
}

console.log(divide(16, 4));

const divideArrow = (a, b) => a / b;

console.log(divideArrow(16, 4));




// 4. Задание:
// Создай объект person с полем name и методом introduce, используя Function Expression.
// Метод должен выводить Привет, меня зовут <name>!.

let person = {
  name: 'Arnaz',
  introduce: function() {
    console.log(`Привет, меня зовут ${this.name} !.`);
  }
}

person.introduce();



// 5. Задание:
// Создай две функции concatStrings1 и concatStrings2,
// используя Function Declaration и Function Expression,
// которые объединяют две строки.

function concatStrings1(a, b) {
  return a + b;
}

console.log(concatStrings1('arnaz', 'ernaz'));

let concatStrings2 = function(a, b) {
  return a + b;
}

console.log(concatStrings2('john', 'natalie'));


// 6. Задание:
// Создай Function Expression, которая принимает возраст и возвращает "Совершеннолетний" если age >= 18, иначе "Несовершеннолетний".

let getAge = function(age) {
  if (age >= 18) {
    return 'Совершеннолетний'
  } else {
    return 'Несоершеннолетний'
  }
}

console.log(getAge(18));



let getAge2 = function(age) {
  return age >= 18 ? 'Совершеннолетний' : 'Несовершеннолетний';
}

console.log(getAge2(18));





// --------------------------------------------------------------------------------------------------
// 1. Создай новый массив, где к каждому числу добавляется 10.

const numbers = [1, 2, 3, 4, 5];

const newNum = numbers.map(num => num + 10);

console.log(newNum);



// 2. Преобразуй массив строк в массив их длин.

const names = ['John', 'Marcus', 'Maks', 'Rashford', 'Arnaz', 'Fevice'];

const lenNames = names.map(name => name.length);

console.log(lenNames);


// 3. Выведи в консоль каждый элемент массива с его индексом.

// names.forEach((name,index) => console.log('index:', index, name));

names.forEach((name,index) => console.log(`index: ${index}, value: ${name}`));


// 4. Умножь все числа массива на 3 и выведи их в консоль.

numbers.forEach(num => console.log(num * 3));


// 5. Оставь только числа больше 2.

const filtNum = numbers.filter(num => num > 2);

console.log(filtNum);



// 6. Из массива строк оставь только слова длиной больше 5 символов.

const filtName = names.filter(name => name.length > 5)

console.log(filtName);


// 7. Найди произведение всех элементов массива.

const accNum = numbers.reduce((acc, num) => acc * num, 1);

console.log(accNum);


// 8. Из массива объектов получи сумму всех цен.

const prices = [
  {
    price: 500
  },

  {
    price: 450
  },

  {
    price: 800
  }
]

const totalSum = prices.reduce((acc, p) => acc + p.price, 0);

console.log(totalSum);


// 9. Найди первый элемент больше 2 в массиве чисел.




// 10. Найди пользователя с именем "Арназ".




// 11. Найди индекс первого четного числа.




// 12. Найди индекс имени длиной больше 4 символов.





// 13. Есть ли хотя бы одно нечетное число?




// 14. Есть ли имя длиной больше 10 символов?




// 15. Все ли числа больше 0?




// 16. Все ли имена начинаются с заглавной буквы?





// 17. Отсортируй массив строк по длине слов.




// 18. Отсортируй массив объектов по возрастанию id.




// 19. Переверни массив чисел.




// 20. Переверни массив имен.




// 21. Разверни массив на один уровень вложенности.




// 22. Разверни полностью глубоко вложенный массив.




// 23. Объедини массив букв в строку без пробелов.




// 24. Объедини массив чисел через запятую.