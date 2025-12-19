// Задание 1. Переменные + типы данных
// Время: ~10 минут
// Дан массив значений:
// const values = [10, "20", null, undefined, true, "JS", 0, false];
// Нужно:
// 1.	Посчитать количество значений каждого типа данных
// 2.	Результат вывести в виде объекта
// Формат результата:
// {
//   number: 2,
//   string: 2,
//   boolean: 2,
//   undefined: 1,
//   object: 1
// }

// ❗ Использовать typeof
//  ❗ Использовать цикл

const values = [10, "20", null, true, "JS", 0, false];

let number = 0
let string = 0
let boolean = 0
let undefined = 0
let object = 0

for(let i = 0; i < values.length; i++){
  if(typeof values[i] == "number"){
    number++
  } else  if(typeof values[i] == "string") {
    string++
  }else  if (typeof values[i] == "boolean"){
    boolean++
  }else if(typeof values[i] ==  "undefined"){
    undefined++
  }else if (typeof values[i] ==  "object"){
    object++
  }
}
console.log( {number:number, string:string, boolean:boolean, object:object})


// Нужно:
// 1.	Получить массив пользователей старше 18 лет
// 2.	Создать массив имён этих пользователей
// 3.	Найти первого пользователя, чей возраст больше 20
// Результаты вывести в консоль.


const users = [
  { id: 1, name: "Aibek", age: 17 },
  { id: 2, name: "Dana", age: 22 },
  { id: 3, name: "Timur", age: 19 },
  { id: 4, name: "Alina", age: 16 },
];

const result = users.filter(el => {
   return el.age >= 18
})
const user = result.find(el => {
   return el.age > 20
})

console.log(result)
console.log(user)



// Задание 5. HTTP-запросы (FakeStore API)

// Время: ~15 минут
// Используя FakeStore API:
// https://fakestoreapi.com/products
// Нужно написать код, который:
// 1.	Отправляет GET-запрос к API с помощью fetch
// 2.	Получает список товаров
// 3.	Оставляет только товары:
// 	с ценой больше 100
// 4.	Создаёт массив объектов формата:
// {
//   title: "Product title",
//   price: 120
// }

const products = fetch('https://fakestoreapi.com/products') 

