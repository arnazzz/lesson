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

const findNum = numbers.find(num => num > 2);

console.log(findNum);



// 10. Найди пользователя с именем "Арназ".

const findName = names.find(name => name === 'Arnaz');

console.log(findName);


// const startTime = performance.now();
// for (let i = 0; i > names.length; i++) {
//   if (names[i] == 'Arnaz') {
//     console.log('УСпешно');
//   } else {
//     console.log('Провал');
//   }
// }
// const endTime = performance.now();
// const elapsedTime = (endTime - startTime);



// 11. Найди индекс первого четного числа.

const findIndx = numbers.findIndex(num => num % 2 === 0);

console.log(findIndx);



// 12. Найди индекс имени длиной больше 5 символов.

const findBigIndx = names.findIndex(name => name.length > 5)

console.log(findBigIndx);


// 13. Есть ли хотя бы одно нечетное число?

const findNechet = numbers.some(num => num % 2 != 0);

console.log(findNechet);


// 14. Есть ли имя длиной больше 10 символов?

const findBigName = names.some(name => name.length > 10);

console.log(findBigName);


// 15. Все ли числа больше 0?

const checkAll = numbers.some(num => num > 0)

console.log(checkAll);



// 16. Все ли имена начинаются с заглавной буквы?

const checkName = names.every(name => name )



// 17. Отсортируй массив строк по длине слов.

const sorting = names.sort((a, b) => a.length - b.length)

console.log(sorting);

// 18. Отсортируй массив объектов по возрастанию id.

const idList = [
  {
    id: 3
  },

  {
    id: 4
  },

  {
    id: 1
  },

  {
    id: 2
  }
]

const sortID = idList.sort((a, b) => a.id - b.id)

console.log(sortID);


// 19. Переверни массив чисел.

const numRev = numbers.reverse()

console.log(numRev);



// 20. Переверни массив имен.

const nameRev = names.reverse()

console.log(nameRev);


// 21. Разверни массив на один уровень вложенности.

const nestedArray = [1, [2, 3], [4, [5, 6]], 7, 8];

console.log(nestedArray.flat(2))

// 22. Разверни полностью глубоко вложенный массив.


const nestedArray2 = [1, [2, [3, 4, [5, 6], 7], 8]];

console.log(nestedArray2.flat(4))


// 23. Объедини массив букв в строку без пробелов.

const cars = ["BMW", "Toyota", "Fiat", "Lada"];

console.log(cars.join(""));


// 24. Объедини массив чисел через запятую.

const arr1 = ["2", "3", "6", "8"];

console.log(arr1.join(","));