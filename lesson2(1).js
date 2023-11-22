// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. 
//     Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. 
// Вивести в консоль пароль кожного користувача.

let arr = [5, 11, 'Dasha', true, -1, 0, 'js', 8, 9, false];
console.log (arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);

let obj = {
    title: 'gfbg',
    pageCount: 153,
    genre: 'hgyv',
    autors: [
        Dasha= {
            name: 'D',
            age: 20
        },
        Pasha= {
            name: 'P',
            age: 30
        },
        Sasha= {
            name: 'S',
            age: 40
        }
    ]
};
console.log(obj.genre, obj.autors[1]);



let arrUsers = [
    user1 = {
        name: 'One',
        username: 'userOne',
        password: '123'
    },
    user2 = {
        name: 'Two',
        username: 'userTwo',
        password: '1234'
    },
    user3 = {
        name: 'Three',
        username: 'userThree',
        password: '123456'
    },
    user4 = {
        name: 'Four',
        username: 'userFour',
        password: '145'
    },
    user5 = {
        name: 'Five',
        username: 'userFive',
        password: '1098'
    },
    user6 = {
        name: 'Six',
        username: 'userSix',
        password: '675'
    },
    user7 = {
        name: 'Seven',
        username: 'userSeven',
        password: '875'
    },
    user8 = {
        name: 'Eight',
        username: 'userEight',
        password: '9378'
    },
    user9 = {
        name: 'Nine',
        username: 'userNine',
        password: '9183'
    },
    user10 = {
        name: 'Ten',
        username: 'userTen',
        password: '12345'
    }
];
console.log(arrUsers[7].password);