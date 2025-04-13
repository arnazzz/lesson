function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("На ноль делить нельзя");
    }
    return a / b;
}

const users = [
    { name: "Айгүл", age: 21 },
    { name: "Ерасыл", age: 25 },
    { name: "Мади", age: 19 }
];

function getUserNames(userList) {
    return userList.map(user => user.name);
}

function getAdultUsers(userList) {
    return userList.filter(user => user.age >= 21);
}

function showResult(result) {
    const el = document.getElementById("output");
    el.innerHTML = result;
}

try {
    const sum = add(10, 5);
    const adults = getAdultUsers(users);
    showResult(`
        10 + 5 = ${sum}<br>
        Совершеннолетние: ${getUserNames(adults).join(", ")}
    `);
    } catch (error) {
    showResult("Ошибка: " + error.message);
}
