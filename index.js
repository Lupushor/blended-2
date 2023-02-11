// ЗАДАНИЕ 1. Напиши скрипт, который для объекта user последовательно:
// 1 добавит поле mood со значением 'happy'
// 2 заменит hobby на 'skydiving'
// 3 заменит значение premium на false
// 4 выводит содержимое объекта users в формате ключ:значение используя Object.keys() и for...of

// const user = {
//     name: 'John',
//     age: 20,
//     hobby: 'tenis',
//     premium: true,
// }

// ============================================================
// ============================================================

//ЗАДАНИЕ 2. У нас есть объект, в котором хранятся зарплаты нашей команды
// Напишите код для сумирования всех зарплат и
// сохраните его результат в переменной sum.
// Если объект salaries пуст, то результат должен быть 0

// const salaries = {
//       Mango: 100,
//       Poly: 160,
//       Ajax: 1470,
// }

// ============================================================
// ============================================================

//ЗАДАНИЕ 3. Напишите ф-цию calcTotalPrice(stones, stonesName),
// которая принимает массив объектов и
// строку с названием камня.
// Функция считает и возвращает общую стоимость камней
// с таким именем, ценой и количеством из объекта

// const stones = [
//     { name: 'Изумруд', price: 1300, quantity: 4 },
//     { name: 'Бриллиант', price: 2700, quantity: 6 },
//     { name: 'Сапфир', price: 400, quantity: 7 },
//     { name: 'Щебень', price: 150, quantity: 100 },
// ]

// ============================================================
// ============================================================

//ЗАДАНИЕ 4. Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат

// const calculator = {
//   read(a, b) {},
//   sum() {},
//   mult() {},
// };

// calculator.read("3", 5);
// console.log(calculator.mult(calculator.a, calculator.b));
// console.log(calculator.sum(calculator.a, calculator.b));


// ============================================================
// ============================================================

//ЗАДАНИЕ 5. Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанного параметра
//Ожидаемый результат ({a: 1. b: 2}, 'b') => {a: 1}

//5.1 Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанных параметров
//Ожидаемый результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// ============================================================
// ============================================================

//ЗАДАНИЕ 6. Напишите функцию, которая принимает как параметр объект
//и формирует объекты в новом массиве в формате [key, value]

// const user = {
//     name: 'John',
//     lastName: 'Stones',
//     age: 20,
//     hobby: 'tenis',
//     hasCar: true,
//     married: false,
// }

// ============================================================
// ============================================================

//ЗАДАНИЕ 7

const users = [
    {
        id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
    {
        id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
        gender: 'male',
        age: 24,
    },
    {
        id: '249b6175-5c30-44c6-b154-f120923736f5',
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        skills: ['adipisicing', 'irure', 'velit'],
        gender: 'female',
        age: 21,
    },
    {
        id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        skills: ['ex', 'culpa', 'nostrud'],
        gender: 'male',
        age: 27,
    },
    {
        id: '150b00fb-dd82-427d-9faf-2879ea87c695',
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        skills: ['non', 'amet', 'ipsum'],
        gender: 'male',
        age: 38,
    },
    {
        id: 'e1bf46ab-7168-491e-925e-f01e21394812',
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        skills: ['lorem', 'veniam', 'culpa'],
        gender: 'female',
        age: 39,
    },
]

// 7.1
// Получить массив имен всех пользователей (поле name).

// const getUserNames = (usersData) => usersData.map(user => user.name);

// console.log(getUserNames(users))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// 7.2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersByColor = (users, color) => users.filter(user => user.eyeColor === color)
// console.log(getUsersByColor(users, 'blue'))
// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// 7.3
// Получить массив имен пользователей по полу (поле gender)

// const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender).map(user => user.name)
// console.log(getUsersByColor(users, 'male'))

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// 7.4
// Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = (users) => users.filter(user => !user.isActive).map(user => user.name)

 // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// const getInactiveUsers = (users) => users.reduce((acc, user) => {
//     if (!user.isActive) {acc.push(user.name)}
//     return acc;
// }, [])

// console.log(getInactiveUsers(users));

// 7.5
// Получить пользователя (не массив) по email (поле email, он уникальный).

// const getUserWithEmail = (users) => users.find((user) => user.email)

// const getUserWithEmail = (users, email) => users.find((user) => user.email === email)

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// 7.6
// Получить массив пользователей в возрасте от min до max

// const getUsersWithAge = (users, min, max) => users.filter(user => user.age >= min && user.age <= max) //без имени
//const getUsersWithAge = (users, min, max) => users.filter(user => user.age >= min && user.age <= max).map(user => user.name)//с именем

// console.log(getUsersWithAge(users, 20, 30))
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log( getUsersWithAge( users, 30, 40 ) );
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// 7.7
// Получить общую сумму баланса (поле balance) всех пользователей.

// console.log(calculateTotalBalance(users)); // 20916

// 7.8
// Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));

// console.log(getUsersWithFriend(users, 'Briana Decker')) // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// 7.9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = users => [...users].sort((userA, userB) => userA.friends.length - userB.friends.length).map(({friends, name}) => ({friends, name})) 
const getNamesSortedByFriendsCount = users => [...users].sort((userA, userB) => userA.friends.length - userB.friends.length).map(user => user.name)
// const getNamesSortedByFriendsCount = users => [...users].sort((userA, userB) => userB.friends.length - userA.friends.length).map(({friends, name}) => ({friends, name})) 

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// 7.10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getFriends = (users) => users.flatMap(user => user.friends).filter((user, index, array) => array.indexOf(user) === index);
// console.log(getFriends(users))
// const getSortedUniqueSkills = (users) => users.flatMap(user => user.skills).filter((user, index, array) => array.indexOf(user) === index).sort((a, b,) => a.localeCompare(b))

// console.log(getSortedUniqueSkills(users))
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// ============================================================
// ============================================================

// ЗАДАНИЕ 8

// В каждом массиве есть уникальная строка, в которой не повторяются буквы. Найдите и выведите эту строку.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

// findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']) // === 'foo'
// findUniq([ 'fghj', 'ghfj', 'abcd', 'jhgf', 'fghj', 'fgjh', 'ghjf' ]) // === 'abcd'
// findUniq(['qwe', 'cmap', 'acmp', 'pmac', 'camp', 'apmc', 'pmac']) // === 'qwe'
